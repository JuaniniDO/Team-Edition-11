

function GetCandidateData() {
    const getData = () => {
        fetch("peticion back", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json)
            .then((data) => {
                if (data.success) {
                  
                }
            });
    };                                                          

   const state = {
        candidate: {
            status: "Succeeded",
            data: {
              socialNetworks: {
                linkedin: "linkedin.com/in/johndoe",
                github: "github.com/johndoe"
              },
              _id: "63f3d0c1e59a936c17c9eeef",
              role: "candidate",
              loginId: "63f3d060e59a936c17c9eeec",
              userName: "johndoe",
              email: "johndoe@example.com",
              firstName: "John",
              lastName: "Doe",
              secondLastName: "Rodríguez",
              bootcamp: "Full Stack Web Development",
              edition: 4,
              languages: [
                "Español",
                "Inglés"
              ],
              description: "Soy un desarrollador web full stack con experiencia en React y Node.js.",
              registerAt: "2021-01-01T00:00:00.000Z",
              isLookingForJob: true,
              appliedJobs: [
                "5f6a5d5d5b5c5d5d5d5d5d5d",
                "5f6a5d5d5b5c5d5d5d5d5d5e"
              ],
              resume: "https://drive.google.com/resume.pdf",
              photo: "https://drive.google.com/profile_photo.jpg"
            },
            error: null
          }
      }        
 return state;
}

export default GetCandidateData;
