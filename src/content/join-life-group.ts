export const joinLifeGroupContent = {
    en: {
        hero: {
            title: "JOIN OUR <br class=\"block md:hidden\" />LIFE GROUP",
            image: "/images/about-us-rectangle-2.png",
        },
        images: {
            feature: "/images/get-conntected-lg-rectangle-14.png",
        },
        intro: {
            title: "WE WOULD LIKE TO <br class=\"block md:hidden\" />CONNECT WITH YOU",
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
            },
            submitLabel: "GET CONNECTED",
            successMessage: "Thank you for connecting with us! We will reach out to you soon.",
            sendingLabel: "Sending...",
            sentLabel: "Sent!"
        }
    },
    vi: {
        hero: {
            title: "THAM GIA <br class=\"block md:hidden\" />NHÓM NHỎ",
            image: "/images/about-us-rectangle-2.png",
        },
        images: {
            feature: "/images/get-conntected-lg-rectangle-14.png",
        },
        intro: {
            title: "CHÚNG TÔI MUỐN <br class=\"block md:hidden\" />KẾT NỐI VỚI BẠN",
            description: "",
        },
        form: {
            fields: [
                { name: "name", label: "Họ và Tên *", type: "text", placeholder: "Nhập văn bản", required: true },
                { name: "mobile", label: "Số điện thoại di động *", type: "tel", placeholder: "Nhập văn bản", required: true },
                { name: "address", label: "Địa chỉ", type: "text", placeholder: "Nhập văn bản", required: false },
                { name: "age", label: "Tuổi", type: "text", placeholder: "Nhập văn bản", required: false },
            ],
            checkboxes: {
                stageOfLife: {
                    label: "Giai đoạn của cuộc đời",
                    options: ["Sinh viên", "Độc thân", "Đã kết hôn"]
                },
                gender: {
                    label: "Giới tính",
                    options: ["Nam", "Nữ"]
                }
            },
            textarea: {
                label: "Chúng tôi có thể kết nối/hỗ trợ bạn như thế nào?",
                placeholder: "Nhập văn bản"
            },
            submitLabel: "KẾT NỐI",
            successMessage: "Cảm ơn bạn đã kết nối với chúng tôi! Chúng tôi sẽ sớm liên hệ lại với bạn.",
            sendingLabel: "Đang gửi...",
            sentLabel: "Đã gửi!"
        }
    }
};
