export const joinLifeGroupContent = {
    hero: {
        title: "JOIN OUR<br class=\"block md:hidden\" />LIFE GROUP",
        image: "/images/about-us-rectangle-2.png",
    },
    images: {
        feature: "/images/get-conntected-lg-rectangle-14.png",
    },
    intro: {
        title: "WE WOULD LIKE TO<br class=\"block md:hidden\" />CONNECT WITH YOU",
        description: "",
    },
    form: {
        fields: [
            { name: "name", label: "First and Last Name *", type: "text", placeholder: "Placeholder text here", required: true },
            { name: "mobile", label: "Mobile Number *", type: "tel", placeholder: "Placeholder text here", required: true },
            { name: "address", label: "Address", type: "text", placeholder: "Placeholder text here", required: false },
            { name: "age", label: "Age", type: "text", placeholder: "Placeholder text here", required: false },
        ],
        checkboxes: {
            stageOfLife: {
                label: "Stage of Life",
                options: ["Student", "Single", "Married"]
            },
            gender: {
                label: "Gender",
                options: ["Male", "Female"]
            }
        },
        textarea: {
            label: "How can we serve you?",
            placeholder: "Placeholder text here"
        }
    }
};
