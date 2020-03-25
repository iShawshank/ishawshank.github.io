import golfStatsScreenshot from './assets/images/golfStatsScreenshot.png'
import headshot from './assets/images/headshot.jpg'

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name: 'Kevin Shaw',
        headerTagline: [//Line 1 For Header
            '👋 You found me! I am Kevin Shaw.',
            //Line 2 For Header
            'Full Stack Software Engineer',
            //Line 3 For Header
            'Denver, CO'
        ],
        //Contact Email
        contactEmail: 'ishawshank39@gmail.com',
        // Add Your About Text Here
        abouttext: "TODO my information here...",
        aboutImage: headshot,
        //Change This To Hide The Image of About Section (True Or False)
        ShowAboutImage: true,//true or false (Change Here)
        // Change Projects Here 
        projects: [
            {
                id: 1,//DO NOT CHANGE THIS (Please)😅
                title: 'Shawshank Golf Stats', //Project Title - Add Your Project Title Here
                service: 'Golf Statistics App', // Add Your Service Type Here
                //Project Image - Add Your Project Image Here
                imageSrc: golfStatsScreenshot,
                //Project URL - Add Your Project Url Here
                url: '/shawshank-golf-stats/index.html'
            },
            /*

            If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
        ,{
        id: 5,
        title: 'Project Five',
        service: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
        */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {
                name: 'Github',
                url: 'https://github.com/ishawshank'
            },

        ]
    }