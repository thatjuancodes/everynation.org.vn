export const prayerRequestContent = {
    en: {
        hero: {
            title: "SEND A <br class=\"block md:hidden\" />PRAYER REQUEST",
            image: "/images/about-us-rectangle-2.png",
        },
        images: {
            feature: "/images/prayer-request-rectangle-14.png",
        },
        intro: {
            title: "SEND PRAYER REQUEST",
            description: "Thank you for contacting us. We would be honored to partner with you in prayer. Please complete this form so we can pray and connect with you.<br/><br/>By filling out this form, you consent to our use of your information. The details you provide will be treated with the utmost respect and confidentiality. We adhere to general data privacy protection principles in Vietnam.",
        },
        form: {
            fields: [
                { name: "name", label: "First and Last Name *", type: "text", placeholder: "Placeholder text here", required: true },
                { name: "facebook", label: "Your Facebook Page *", type: "text", placeholder: "Placeholder text here", required: false },
            ],
            textarea: {
                label: "Fill Your Prayer Request Here",
                placeholder: "Placeholder text here"
            },
            submitLabel: "SEND PRAYER REQUEST",
            successMessage: "Thank you for sharing your request! We will be praying with you.",
            sendingLabel: "Sending...",
            sentLabel: "Sent!"
        }
    },
    vi: {
        hero: {
            title: "GỬI YÊU CẦU <br class=\"block md:hidden\" />CẦU NGUYỆN",
            image: "/images/about-us-rectangle-2.png",
        },
        images: {
            feature: "/images/prayer-request-rectangle-14.png",
        },
        intro: {
            title: "GỬI YÊU CẦU CẦU NGUYỆN",
            description: "Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ rất vinh dự được đồng hành cùng bạn trong lời cầu nguyện. Vui lòng hoàn thành biểu mẫu này để chúng tôi có thể cầu nguyện cho bạn và kết nối với bạn.<br/><br/>Bằng cách điền vào biểu mẫu này, bạn đồng ý cho chúng tôi sử dụng thông tin của bạn. Các chi tiết bạn cung cấp sẽ được xử lý với sự tôn trọng và bảo mật tối đa. Chúng tôi tuân thủ các nguyên tắc bảo vệ quyền riêng tư dữ liệu chung tại Việt Nam.",
        },
        form: {
            fields: [
                { name: "name", label: "Họ và tên *", type: "text", placeholder: "Nhập văn bản", required: true },
                { name: "facebook", label: "Trang facebook của bạn *", type: "text", placeholder: "Nhập văn bản", required: false },
            ],
            textarea: {
                label: "Gửi thông tin yêu cầu cầu nguyện tại đây",
                placeholder: "Nhập văn bản"
            },
            submitLabel: "GỬI",
            successMessage: "Cảm ơn bạn đã chia sẻ yêu cầu của mình! Chúng tôi sẽ cầu nguyện cùng bạn.",
            sendingLabel: "Đang gửi...",
            sentLabel: "Đã gửi!"
        }
    }
};
