container = document.querySelector(".container");
teamContainer = document.querySelector(".team-container");

const nisargPratishtanObjectives = [
  "Established during May 2023 under The Societies Registration Act 1826.",
  "Main motto: Environmental conservation and educational upliftment with social relevance.",
  "Promote sports education by opening gymnasium and train students in cultural and traditional sports.",
  "Create digital literacy among students and promote technical education.",
  "Promote and support various educational aspects for girl child students.",
  "Organize educational awareness programs for rural, farmer background students.",
  "Organize social activities like workshops, seminars, blood donation camps, National Integration Camps, group marriages, etc.",
  "Environmental conservation through tree plantation and water conservation.",
  "Guide students regarding advances in education and career opportunities in various fields.",
  "Run health and diseases awareness programs, helping poor and deprived patients.",
  "Environmental protection through pollution control activities, waste water treatment, garbage management.",
  "Open hostels, libraries, and study centers for poor students.",
];

// Output the objectives
nisargPratishtanObjectives.forEach((objective, index) => {
  //make a list of color white with round corner and a leading icon of check and a margin of 10px and apend the list data to container
  container.innerHTML += `
        <div class="card">
        <img src="/assets/point_img.png" alt="O"  class="extra-leaf"/>
          <p class="content">
            ${objective}
          </p>
        </div>
    `;
});

// Team members
const teamMembers = [
  {
    name: "Mr. Sandeep Bhor",
    designation: "President",
    img: "/assets/team/Dr.PrashantPatil.jpg",
  },
  {
    name: "Mr. Vaibhav Temkar",
    designation: "President",
    img: "/assets/team/Dr.PrashantPatil.jpg",
  },
  {
    name: "Mr. Deepak Waghmare",
    designation: "President",
    img: "/assets/team/Dr.PrashantPatil.jpg",
  },
  {
    name: "Mr. Ganesh Karale",
    designation: "President",
    img: "/assets/team/Dr.PrashantPatil.jpg",
  },
];
teamMembers.forEach((member, index) => {
  teamContainer.innerHTML += `
  <div class="team-card">
  <img src="/assets/Person_img.png" alt="" class="team-person-image">
  <h3 class="team-person-name">${member.name}</h3>
</div>
        `;
});
