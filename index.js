const cf = require('cross-fetch');
const fetch = cf.fetch;

const firebase = require('./firebase.js');

const db = firebase.database();
const posts_ref = db.ref('posts');

async function webhook_send(bulletin_post) {
  if (!bulletin_post.approved) return;
  let post_embed = {
    title: bulletin_post.title,
    description: bulletin_post.text,
    url: process.env.tino_bulletin_url+"/bulletins/"+bulletin_post.category,
    author: {
      name: bulletin_post.authorName
    }
  };
  await fetch(process.env.webhook_url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      embeds: [post_embed]
    })
  });
}

posts_ref.on('child_changed', async (snapshot) => {
  try {
    await webhook_send(snapshot.val());
  } catch (e) {
    console.log(e);
  }
});
