import uniqid from "uniqid";

const initialData = {
    userInfo: {
        fullName: "Justin Wayne Hough",
        email: "justinwhough@gmail.com",
        phone: "+61 402 637 096",
        address: "Melbourne, VIC"
    },
    
    sections: {
        education: [
            {
            title: "Monash University",
            details: "Bachelor of Aerospace Engineering (Hons)",
            startDate: "01/03/2019",
            id: uniqid(),
            },
        ],
        experience: [
            {
                title: "Gippsland Water",
                details: "Vacation Student",
                startDate: "01/11/2021",
                id: uniqid(),
            }
        ]
    }
}

export default initialData;
