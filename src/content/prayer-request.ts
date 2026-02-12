export const prayerRequestContent = {
    hero: {
        title: "PRAYER REQUEST",
        image: "/images/about-us-rectangle-2.png",
    },
    images: {
        feature: "/images/prayer-request-rectangle-14.png",
    },
    intro: {
        title: "NEED A PRAYER REQUEST - SEND US HERE",
        description: `Thank you for reaching out to us. We would be honored to join you in prayer. Please complete this form so that we may pray for you and connect with you.<br>
By filling out this form, you consent to our use of your information. The details you provide will be handled with the utmost respect and confidentiality. We adhere to general data privacy protection principles in Vietnam.`,
    },
    form: {
        fields: [
            { name: "name", label: "First and Last Name *", type: "text", placeholder: "Placeholder text here", required: true },
            { name: "facebook", label: "Your Facebook Page (Example: https://www.facebook.com/ten.kennnnn)", type: "text", placeholder: "Placeholder text here", required: false },
        ],
        textarea: {
            label: "Fill Your Prayer Request Here",
            placeholder: "Placeholder text here"
        }
    }
};
