let input = document.querySelector(".inpu");
let magic = document.querySelector(".magic");
let qush = function (data, data1) {
  html = `<div class="prof_and_boshqa">
  <div class="profile">
    <img src="${data.avatar_url}" alt="#" class="im" />
    <a href="${data.html_url}" class="tugma">View Profile</a>
  </div>
  <div class="right">
    <div class="malumot">
      <p class="mal i">Public Repos: ${data.public_repos}</p>
      <p class="mal j">Public Gits: ${data.public_gists}</p>
      <p class="mal k">Followers: ${data.followers}</p>
      <p class="mal l">Following: ${data.following}</p>
    </div>
    <div class="section">
      <div class="bir q">
        <p class="company">Company: ${data.company}</p>
      </div>
      <div class="bir q">
        <p class="company">Website/Blog: ${data.blog}</p>
      </div>
      <div class="bir q">
        <p class="company">Location: ${data.location}</p>
      </div>
      <div class="bir">
        <p class="company">Member Since:${data.created_at}</p>
      </div>
    </div>
  </div>
</div>
`;
  document.querySelector(".shu_yer").insertAdjacentHTML("afterend", html);

  let repoQush = ` <div class="birinchi">
  <div class="left"><a href="${key.html_url}" class="ism">Fazliddin0901</a></div>
  <div class="ong">
    <p class="ch z">Stars:1</p>
    <p class="ch x">Watchers:1</p>
    <p class="ch p">Forks:0</p>
  </div>
 </div>`;
};

let yaratfunc = async function () {
  let apiolibkel = await fetch(
    `https://api.github.com/users/plux96?client_id=65b44d46d520be1f19c7&client_secret=7287ef205413001a79b30f0fbcc04416153ef797`
  );
  let dateJson = await apiolibkel.json();
  qush(dateJson);
  let repo = await fetch(
    `https://api.github.com/users/plux96/repos?per_page=created: asc&sort=5&client_id=65b44d46d520be1f19c7&client_secret=7287ef205413001a79b30f0fbcc04416153ef797`
  );
  let dataJson2 = await repo.json();
  console.log(dataJson2);
  console.log(dateJson);
};
yaratfunc();
