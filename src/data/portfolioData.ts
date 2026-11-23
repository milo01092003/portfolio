export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  gitlabUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  current?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
    description?: string;
  }[];
}

export const portfolioData = {
  personalInfo: {
    name: "Trịnh Minh Đức",
    shortName: "Trịnh Đức",
    tagline: "Business Analyst • Quản Trị Web • Software Engineer",
    typewriterRoles: [
      "Business Analyst",
      "Quản Trị Web",
      "System Designer & Consultant",
      "Full-stack Developer"
    ],
    bio: "Sinh viên CNTT tại Đại học FPT với thế mạnh kết hợp giữa Phân tích Nghiệp vụ, Quản trị vận hành hệ thống Web và Phát triển phần mềm. Hiện tôi đang đảm nhận vai trò Business Analyst và Quản trị Web cho dự án IPOPEN.VN tại Công ty Cổ phần Truyền thông Trường Thành - Nền tảng thương mại hóa Tài sản Trí tuệ.",
    location: "Hà Nội, Việt Nam",
    email: "ductm19.it@gmail.com",
    phone: "0901 525 3299",
    availableForHire: true,
    socialLinks: {
      github: "https://github.com/milo01092003",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
      email: "mailto:ductm19.it@gmail.com",
    },
    cvUrl: "#",
    stats: [
      { label: "Giờ Phân Tích & Code", value: "1,200+" },
      { label: "Dự Án Đã Thực Hiện", value: "5+" },
      { label: "Bugs & Lỗ Hổng Đã Fix", value: "40+" },
      { label: "Đúng Hạn & Chuẩn Nghiệp Vụ", value: "100%" },
    ]
  },

  about: {
    title: "Về Trịnh Minh Đức",
    subtitle: "Cầu nối vững chắc giữa bài toán Kinh doanh và Giải pháp Công nghệ",
    paragraphs: [
      "Chào bạn! Tôi là Trịnh Minh Đức, sinh viên chuyên ngành Công nghệ Thông tin tại Đại học FPT. Tôi định vị bản thân là một Business Analyst am hiểu kỹ thuật sâu sắc, đồng thời có năng lực thực chiến trong Quản trị Web và Phát triển Phần mềm.",
      "Hiện tại, từ tháng 06/2026 đến nay, tại Công ty Cổ phần Truyền thông Trường Thành, tôi đang trực tiếp đảm nhiệm vai trò Business Analyst và Quản Trị Web cho dự án trọng điểm IPOPEN - ipopen.vn, sàn giao dịch và thương mại hóa Tài sản Trí tuệ. Tôi phụ trách toàn diện từ khâu đặc tả tài liệu BRD, SRS, thiết kế luồng quy trình BPMN, UML, kiểm duyệt tính pháp lý, cơ chế Escrow đối soát IoT, tập luật AI Chat Shield đến việc trực tiếp quản trị kỹ thuật, tối ưu hiệu năng và bảo mật cho website ipopen.vn.",
      "Trước đó, tôi đã hoàn thành 4 tháng cống hiến tại FPT Software từ tháng 09/2024 đến tháng 01/2025 với vai trò phân tích yêu cầu nghiệp vụ, thiết kế kiến trúc hệ thống và quy trình SAP ABAP. Phương châm của tôi: Mỗi dòng phân tích phải giải quyết trúng nhu cầu kinh doanh, mỗi tính năng triển khai phải tối ưu và bền vững."
    ],
    keyStrengths: [
      {
        title: "Thương Mại Hóa Tài Sản Trí Tuệ",
        description: "Mô hình hóa quy trình thương mại hóa tài sản trí tuệ gồm Chuyển nhượng, Li-xăng, Chuyển giao công nghệ, vẽ BPMN, UML và biên soạn tài liệu BRD, SRS chuẩn xác."
      },
      {
        title: "Quản Trị Web & Vận Hành ipopen.vn",
        description: "Trực tiếp quản trị kỹ thuật nền tảng ipopen.vn: tối ưu SEO Technical, giám sát Uptime, quản lý phân quyền và kiểm soát bảo mật hệ thống."
      },
      {
        title: "Cơ Chế Bảo Chứng Escrow & AI Chat Shield",
        description: "Mô hình hóa két bảo chứng Escrow đối soát dữ liệu cảm biến IoT thực địa, xây dựng tập luật AI Chat Shield ngăn chặn giao dịch ngầm ngoài sàn."
      },
      {
        title: "Kiểm Thử Nghiệm Thu UAT & Kỹ Thuật",
        description: "Chủ trì nghiệm thu hệ thống UAT, phối hợp chặt chẽ với team Dev, nắm vững kiến trúc dữ liệu, RESTful API, Java, Spring Boot và SAP Workflow."
      }
    ]
  },

  skillCategories: [
    {
      title: "Phân Tích Nghiệp Vụ BA & Thiết Kế Hệ Thống",
      skills: [
        { 
          name: "Vẽ Sơ Đồ Quy Trình BPMN & UML", 
          level: 95, 
          description: "Mô phỏng các bước hoạt động của hệ thống thành biểu đồ trực quan, giúp cả khách hàng và lập trình viên đều hiểu rõ" 
        },
        { 
          name: "Viết Tài Liệu Yêu Cầu BRD & SRS", 
          level: 92, 
          description: "Chuyển hóa mong muốn kinh doanh thành bản mô tả tính năng chi tiết, rõ ràng để đội ngũ kỹ thuật lập trình chính xác" 
        },
        { 
          name: "Thương Mại Hóa Tài Sản Trí Tuệ", 
          level: 90, 
          description: "Thiết kế quy trình mua bán hoặc chuyển giao sáng chế, thỏa thuận bảo mật NDA và két bảo chứng thanh toán an toàn Escrow" 
        },
        { 
          name: "Kiểm Thử Nghiệm Thu UAT", 
          level: 88, 
          description: "Trực tiếp dùng thử và kiểm tra kỹ lưỡng phần mềm để phát hiện, xử lý lỗi trước khi chính thức bàn giao cho người dùng" 
        },
      ]
    },
    {
      title: "Quản Trị Website & Vận Hành Web Admin",
      skills: [
        { 
          name: "Quản Trị Vận Hành Web ipopen.vn", 
          level: 92, 
          description: "Quản lý nội dung, tài khoản, cấu hình hệ thống và giữ cho website luôn hoạt động mượt mà, ổn định mỗi ngày" 
        },
        { 
          name: "Tối Ưu Hóa Tìm Kiếm SEO", 
          level: 88, 
          description: "Tối ưu từ khóa, bài viết và cấu trúc kỹ thuật giúp website dễ dàng đạt thứ hạng cao trên Google và tiếp cận nhiều người hơn" 
        },
        { 
          name: "Tốc Độ Tải Trang & Bảo Mật Web", 
          level: 85, 
          description: "Tăng tốc độ mở trang, giám sát website hoạt động 24/7 và thiết lập các lớp bảo vệ chống rò rỉ dữ liệu quan trọng" 
        },
        { 
          name: "Quản Lý Tên Miền, Hosting & SSL", 
          level: 82, 
          description: "Cài đặt tên miền quốc tế và Việt Nam, chứng chỉ bảo mật HTTPS và liên kết máy chủ ổn định với các dịch vụ bên ngoài" 
        },
      ]
    },
    {
      title: "Công Nghệ Lập Trình & Công Cụ Kỹ Thuật",
      skills: [
        { 
          name: "Cơ Sở Dữ Liệu & Tối Ưu SQL", 
          level: 88, 
          description: "Tổ chức và sắp xếp dữ liệu bài bản với SQL Server, MySQL giúp tải danh sách và tìm kiếm thông tin nhanh hơn 50%" 
        },
        { 
          name: "Lập Trình Web Java & Spring Boot", 
          level: 85, 
          description: "Xây dựng các chức năng xử lý đơn hàng, giỏ hàng, đăng nhập người dùng và kết nối dữ liệu an toàn" 
        },
        { 
          name: "Tự Động Hóa Quy Trình SAP Workflow", 
          level: 80, 
          description: "Tự động hóa luồng duyệt hồ sơ, đơn từ tuyển dụng và gửi email báo cáo nhanh chóng trên hệ thống doanh nghiệp SAP" 
        },
        { 
          name: "Công Cụ Quản Lý Nhóm Git & JIRA", 
          level: 90, 
          description: "Theo dõi tiến độ công việc, quản lý lịch sử mã nguồn và báo cáo lỗi nhanh chóng giữa các thành viên trong đội ngũ" 
        },
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "project-ipopen",
      title: "IPOPEN.VN - Sàn Giao Dịch & Thương Mại Hóa Tài Sản Trí Tuệ",
      category: "BA & Quản Trị Web",
      description: "Dự án nền tảng trọng điểm của Công ty Cổ phần Truyền thông Trường Thành. Cổng thông tin và sàn giao dịch thương mại hóa Tài sản Trí tuệ, sáng chế và chuyển giao công nghệ trực tuyến kết nối nhà khoa học, doanh nghiệp và nhà đầu tư.",
      image: "/projects/ipopen.jpg",
      tags: ["Trường Thành Media", "Business Analysis", "Web Admin", "BPMN, UML", "Escrow System", "AI Chat Shield"],
      demoUrl: "https://ipopen.vn",
      featured: true,
      highlights: [
        "Đảm nhiệm vai trò Business Analyst và Quản Trị Web chính của dự án tại Trường Thành Media từ tháng 06/2026 đến nay",
        "Phân tích và đặc tả quy trình thương mại hóa Tài sản Trí tuệ theo 3 mô hình: Chuyển nhượng, Li-xăng và Chuyển giao công nghệ",
        "Quản trị kỹ thuật website ipopen.vn: cấu hình hạ tầng, tối ưu SEO, giám sát uptime và bảo mật dữ liệu",
        "Thiết kế luồng kiểm duyệt tính pháp lý văn bằng bảo hộ đầu vào và tự động hóa thỏa thuận bảo mật thông tin NDA",
        "Mô hình hóa quy trình két bảo chứng Escrow đối soát cảm biến IoT và xây dựng tập luật cho AI Chat Shield chống giao dịch ngầm ngoài sàn",
        "Trực tiếp chủ trì nghiệm thu hệ thống UAT trước khi chính thức đưa vào vận hành"
      ]
    },
    {
      id: "project-ministore",
      title: "Mini Store - Hệ Thống E-Commerce Điện Thoại Thông Minh",
      category: "Thương mại điện tử",
      description: "Hệ thống thương mại điện tử chuyên biệt cho điện thoại di động với kiến trúc đa biến thể sản phẩm, tích hợp SpeedSMS Gateway và Dashboard quản trị chuyên sâu.",
      image: "/projects/ministore.jpg",
      tags: ["Spring Boot", "Java", "MySQL", "JavaScript", "SpeedSMS API", "JPA, Hibernate"],
      githubUrl: "https://github.com/milo01092003/MiniStore",
      featured: true,
      highlights: [
        "Thiết kế cơ sở dữ liệu hỗ trợ đa biến thể sản phẩm về màu sắc và dung lượng với kho hàng độc lập",
        "Xây dựng RESTful API bằng Spring Boot và tích hợp SpeedSMS để gửi mã OTP khôi phục mật khẩu",
        "Phát triển Admin Dashboard toàn diện: quản lý trạng thái đơn hàng, thống kê doanh thu và tồn kho",
        "Tối ưu hóa giao diện Premium Mobile Theme mượt mà và luồng mua hàng tiện lợi"
      ]
    },
    {
      id: "project-sap-erec",
      title: "Recruitment Workflow System - SAP EREC",
      category: "Hệ thống Doanh nghiệp",
      description: "Hệ thống phê duyệt đa tầng tự động hóa toàn bộ vòng đời luồng yêu cầu tuyển dụng và onboarding nhân sự trên nền tảng SAP S/4HANA.",
      image: "/projects/sap-erec.jpg",
      tags: ["SAP S/4HANA", "HCM", "ABAP Workflow", "Fiori", "SmartForms"],
      featured: true,
      highlights: [
        "Phân tích yêu cầu nghiệp vụ và chuẩn hóa quy trình AS-IS và TO-BE chi tiết",
        "Phát triển các ứng dụng Fiori từ HCM_001 tới HCM_009 phục vụ tạo và duyệt yêu cầu mượt mà",
        "Thiết lập luồng Approval đa cấp bằng ABAP Workflow dựa trên sơ đồ tổ chức phòng ban OM",
        "Tích hợp SAP My Inbox và SmartForms báo cáo tự động, tiết kiệm tới 70% thời gian xử lý thủ công của phòng Nhân sự"
      ]
    },
    {
      id: "project-babiesshop",
      title: "Babies Shop Online System - Nền Tảng Mẹ & Bé",
      category: "Thương mại điện tử",
      description: "Nền tảng mua sắm trực tuyến cho mẹ và bé tích hợp cổng thanh toán VNPay, đăng nhập Google OAuth 2.0 và quy trình kiểm thử tự động nghiêm ngặt.",
      image: "/projects/babiesshop.jpg",
      tags: ["JSP, Servlet", "SQL Server", "VNPay", "Selenium", "OAuth2", "JIRA"],
      gitlabUrl: "https://gitlab.com/nghiadmhe171283/g6_se1849sap_swp391",
      featured: false,
      highlights: [
        "Xây dựng API và quản lý Backend MVC, tích hợp Google OAuth 2.0 và thanh toán VNPay",
        "Tối ưu hóa câu truy vấn SQL Server, cải thiện 50% thời gian load dữ liệu tại trang danh mục sản phẩm",
        "Viết kịch bản kiểm thử tự động với Selenium IDE và quản lý Regression Test trên JIRA",
        "Nhận diện và vá hơn 40 lỗi bảo mật nguy hiểm trước khi đưa ứng dụng lên production"
      ]
    }
  ] as Project[],

  experiences: [
    {
      id: "exp-truongthanh-ipopen",
      role: "Business Analyst & Quản Trị Web - Dự án IPOPEN.VN",
      company: "Công ty Cổ phần Truyền thông Trường Thành",
      period: "06/2026 - Nay",
      location: "Hà Nội, Việt Nam",
      current: true,
      description: "Đảm nhiệm vai trò Business Analyst và Quản Trị Web cho dự án trọng điểm IPOPEN - ipopen.vn, sàn giao dịch và thương mại hóa Tài sản Trí tuệ. Phụ trách phân tích đặc tả yêu cầu, thiết kế quy trình nghiệp vụ và trực tiếp quản trị kỹ thuật, vận hành hệ thống website.",
      achievements: [
        "Thương mại hóa Tài sản Trí tuệ: Phân tích yêu cầu và đặc tả quy trình thương mại hóa theo 3 mô hình: Chuyển nhượng, Li-xăng và Chuyển giao công nghệ",
        "Quản trị kỹ thuật website ipopen.vn: Cấu hình hạ tầng, tối ưu hóa SEO Technical, theo dõi Uptime, quản lý phân quyền và kiểm soát chất lượng vận hành hàng ngày",
        "Kiểm duyệt pháp lý và thỏa thuận NDA: Thiết kế luồng kiểm duyệt tính pháp lý của văn bằng bảo hộ đầu vào và quy trình tự động hóa thỏa thuận bảo mật thông tin NDA giữa các bên",
        "Tranh chấp Escrow: Mô hình hóa quy trình xử lý tranh chấp két bảo chứng Escrow bằng cách đối soát dữ liệu cảm biến IoT thực địa với thông số kỹ thuật trong bằng sáng chế",
        "AI Chat Shield: Xây dựng tập luật cho AI Chat Shield để quét từ khóa vi phạm, ngăn chặn giao dịch ngầm ngoài sàn nhằm bảo vệ bí mật kinh doanh và bản quyền công nghệ",
        "UAT và Bàn giao: Bàn giao logic nghiệp vụ cho đội ngũ Developer và trực tiếp tham gia kiểm thử nghiệm thu hệ thống UAT trước khi vận hành"
      ],
      skills: ["Business Analysis", "Web Admin", "BPMN, UML", "Escrow System", "AI Chat Shield", "SEO & Security", "UAT Testing"]
    },
    {
      id: "exp-fsoft",
      role: "Business Analyst Intern, Trainee",
      company: "FPT Software",
      period: "09/2024 - 01/2025 - 4 tháng",
      location: "Hà Nội, Việt Nam",
      current: false,
      description: "Tham gia tiếp nhận yêu cầu từ khách hàng, lập tài liệu nghiệp vụ phần mềm và tham gia đào tạo chuyên sâu về phân tích hệ thống doanh nghiệp SAP.",
      achievements: [
        "Biên dịch Use Case thành Use Case Descriptions chi tiết - tài liệu chỉ dẫn cốt lõi cho team phát triển",
        "Nghiên cứu Software Architecture, Design Patterns và cấu trúc mở rộng của dự án",
        "Hoàn thành xuất sắc khóa đào tạo Advanced Business Application Programming SAP ABAP",
        "Đánh giá Testability qua Requirement Walkthroughs, giúp phát hiện lỗi nghiệp vụ ngay từ giai đoạn đầu"
      ],
      skills: ["Use Case", "UML", "SAP ABAP", "Software Architecture", "QA Walkthroughs"]
    }
  ] as Experience[],

  education: [
    {
      degree: "Kỹ sư Công nghệ Thông tin - Kỹ thuật Phần mềm",
      school: "Đại học FPT",
      period: "2021 - 2025",
      description: "Chuyên ngành Kỹ thuật Phần mềm. Tập trung nghiên cứu Phân tích Nghiệp vụ Business Analysis, Phân tích Dữ liệu, Thiết kế Kiến trúc Hệ thống và Phát triển Phần mềm chất lượng cao."
    }
  ],

  testimonials: [
    {
      quote: "Đức thể hiện năng lực phân tích nghiệp vụ sắc bén và cầu toàn. Khả năng chuyển hóa bài toán thương mại hóa tài sản trí tuệ phức tạp thành tài liệu kỹ thuật rõ ràng của Đức giúp team Dev tiết kiệm rất nhiều thời gian.",
      name: "Trưởng Nhóm Kỹ Thuật",
      position: "Senior Tech Lead • Trường Thành Media"
    },
    {
      quote: "Trong vai trò BA và Quản trị Web cho dự án ipopen.vn, Đức luôn chủ động xử lý các vấn đề phát sinh, tối ưu quy trình và giữ cho nền tảng vận hành ổn định, an toàn.",
      name: "Ban Quản Lý Dự Án",
      position: "Project Manager • Dự án IPOPEN"
    }
  ]
};
