// expert_system.js

class LinkedInExpertSystem {
    constructor() {
        // Dictionaries and rules for the expert system
        this.dictionaries = {
            passiveVerbs: ['responsible for', 'duties included', 'managed', 'worked on', 'helped', 'assisted', 'handled', 'was in charge of', 'participated in'],
            highImpactVerbs: ['architected', 'spearheaded', 'scaled', 'delivered', 'deployed', 'engineered', 'optimized', '10x', 'transformed', 'pioneered', 'championed', 'galvanized', 'orchestrated'],
            futuristKeywords: ['AI', 'Generative AI', 'LLM', 'Machine Learning', 'Systems Architecture', 'Automation', 'Strategic Foresight', 'Digital Transformation', 'Web3', 'Quantum', 'Rust', 'Mojo', 'RAG', 'Agentic AI'],
            basicSkills: ['Microsoft Word', 'Excel', 'PowerPoint', 'Teamwork', 'Communication', 'HTML', 'CSS', 'Data Entry', 'Office', 'Social Media'],
            
            // Career Target Role matrices (Expanded to 80 Roles)
            roles: {
                ai_ml_engineer: {
                    title: "AI/ML Engineer & Architect",
                    required: ['LLM', 'Generative AI', 'PyTorch', 'TensorFlow', 'RAG', 'Vector Database', 'Fine-Tuning', 'Mojo', 'Python', 'Machine Learning', 'Transformer', 'NLP', 'Model Deployment', 'Agentic AI', 'LangChain'],
                    legacy: ['Excel', 'Word', 'HTML', 'CSS', 'Data Entry', 'WordPress'],
                    marketDescription: "AI/ML positions demand cutting-edge engineering depth. Generic coding skills are baseline; high-impact roles look for concrete model orchestration, fine-tuning, and semantic database capabilities."
                },
                full_stack_dev: {
                    title: "Senior Full-Stack Developer",
                    required: ['React', 'Next.js', 'Node.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS', 'System Architecture', 'CI/CD', 'Serverless', 'Tailwind', 'Redis', 'Microservices', 'Kubernetes'],
                    legacy: ['jQuery', 'Dreamweaver', 'Bootstrap', 'HTML', 'CSS', 'Frontpage'],
                    marketDescription: "Senior product engineering roles require architecture maturity, cloud deployment systems, and modern modular frameworks over simple markup styling."
                },
                product_leader: {
                    title: "Product Leader (PM/Director)",
                    required: ['Product Strategy', 'Roadmap', 'UX Research', 'Agile', 'Metrics & Analytics', 'A/B Testing', 'Growth Hacking', 'SQL', 'Stakeholder Management', 'Customer Discovery', 'Market Analysis', 'Scrum', 'SaaS', 'Product-Led Growth'],
                    legacy: ['Excel', 'PowerPoint', 'Meeting Scheduling', 'Note Taking', 'Data Entry'],
                    marketDescription: "Product leaders must shift narratives from 'managing tasks' to 'owning business outcomes' and 'defining strategic vision'. High-impact metrics override administrative skills."
                },
                growth_marketer: {
                    title: "Growth Marketer & Copywriter",
                    required: ['SEO', 'SEM', 'Conversion Rate Optimization', 'CRO', 'A/B Testing', 'Copywriting', 'Content Strategy', 'Google Analytics', 'Lead Generation', 'Email Marketing', 'Paid Acquisition', 'SQL', 'Brand Positioning', 'Influencer Marketing'],
                    legacy: ['Social Media Posting', 'Microsoft Word', 'Canva', 'Typing', 'Event Planning'],
                    marketDescription: "Growth marketing demands data-driven analytical prowess and narrative architecture, moving away from simple passive community posting."
                },
                strategy_consultant: {
                    title: "Enterprise Strategy Consultant",
                    required: ['Strategic Foresight', 'Digital Transformation', 'Enterprise Architecture', 'B2B Consulting', 'M&A', 'Financial Modeling', 'Change Management', 'Executive Coaching', 'Operations Strategy', 'Risk Management', 'Market Entry', 'Corporate Strategy'],
                    legacy: ['Excel', 'PowerPoint', 'Typing', 'Filing', 'Data Entry'],
                    marketDescription: "High-ticket strategic consulting relies on heavy business transformation authority, foresight frameworks, and specialized corporate value blueprints."
                },
                data_scientist: {
                    title: "Data Scientist",
                    required: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-Learn', 'Data Modeling', 'Statistical Analysis', 'Machine Learning', 'Data Visualization', 'A/B Testing', 'Jupyter', 'R', 'Tableau', 'Feature Engineering'],
                    legacy: ['Excel', 'PowerPoint', 'Data Entry', 'Word', 'Filing'],
                    marketDescription: "Data Scientists leverage quantitative algorithms and hypothesis testing. Diluting profiles with basic spreadsheets masks your core predictive modeling capabilities."
                },
                devops_engineer: {
                    title: "DevOps & Infrastructure Engineer",
                    required: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform', 'AWS', 'Linux', 'Bash', 'Ansible', 'Prometheus', 'Grafana', 'CloudFormation', 'Infrastructure as Code', 'SRE'],
                    legacy: ['HTML', 'CSS', 'Manual Testing', 'FTP', 'Dreamweaver'],
                    marketDescription: "DevOps thrives on automation, reliability engineering (SRE), and codifying environments. Highlight systemic scale rather than legacy design and markup skills."
                },
                cybersecurity_analyst: {
                    title: "Cybersecurity Analyst",
                    required: ['SIEM', 'Penetration Testing', 'Incident Response', 'Wireshark', 'Network Security', 'Vulnerability Assessment', 'OWASP', 'Firewalls', 'IAM', 'SOC', 'Threat Intelligence', 'Cryptography', 'CISSP', 'CEH'],
                    legacy: ['Excel', 'Customer Support', 'Data Entry', 'Word'],
                    marketDescription: "Security experts are defensive architects. Recruiter searches focus heavily on threat mitigation frameworks, access modeling (IAM), and formal certification keywords."
                },
                ux_ui_designer: {
                    title: "UX/UI Product Designer",
                    required: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Information Architecture', 'User Journeys', 'Visual Design', 'Adobe XD', 'Interaction Design', 'Usability Testing', 'UI Components', 'Heuristic Evaluation'],
                    legacy: ['HTML', 'CSS', 'Frontpage', 'Data Entry', 'Photoshop Crop'],
                    marketDescription: "Designers focus on strategic user journeys and visual design systems. Avoid listing front-end coding unless you target technical hybrid engineering tracks."
                },
                cloud_architect: {
                    title: "Cloud Enterprise Architect",
                    required: ['AWS', 'Azure', 'GCP', 'Cloud Architecture', 'Microservices', 'Serverless', 'IAM', 'VPC', 'Multi-Cloud', 'Cloud Migration', 'Enterprise Security', 'Disaster Recovery', 'Cost Optimization'],
                    legacy: ['Excel', 'HTML', 'WordPress', 'FTP', 'cPanel'],
                    marketDescription: "Enterprise Cloud Architects design highly-available global topologies. Shift the focus from basic file management or website templates to scalable cloud governance."
                },
                blockchain_developer: {
                    title: "Blockchain & Web3 Developer",
                    required: ['Solidity', 'Ethereum', 'Smart Contracts', 'Cryptography', 'Rust', 'Web3.js', 'Ethers.js', 'Hardhat', 'DeFi', 'NFTs', 'Consensus Algorithms', 'Hyperledger', 'IPFS', 'dApps'],
                    legacy: ['WordPress', 'HTML', 'CSS', 'PHP', 'SQL Server'],
                    marketDescription: "Web3 engineering values decentralization protocols, smart contract execution security, and cryptosystem architecture above generic back-end configurations."
                },
                qa_automation: {
                    title: "QA Automation Engineer",
                    required: ['Selenium', 'Cypress', 'Playwright', 'Test Automation', 'JavaScript', 'Python', 'JUnit', 'CI/CD', 'API Testing', 'Postman', 'Regression Testing', 'Bug Tracking', 'Load Testing'],
                    legacy: ['Manual Testing', 'Excel', 'Word', 'Typing'],
                    marketDescription: "Modern QA relies on code-driven programmatic regressions and browser environments. Emphasize automated suite orchestration over manual point-and-click operations."
                },
                technical_writer: {
                    title: "Technical Documentarian / Writer",
                    required: ['Technical Writing', 'API Documentation', 'Markdown', 'Git', 'Docusaurus', 'Swagger', 'OpenAPI', 'Technical Editing', 'User Guides', 'Release Notes', 'SaaS', 'Developer Relations', 'Confluence'],
                    legacy: ['Blogging', 'Excel', 'PowerPoint', 'Typing', 'Filing'],
                    marketDescription: "Technical Communicators act as bridges between codebases and end-users. Showing API blueprinting structure and automated static tools beats general blogging."
                },
                scrum_master: {
                    title: "Certified Scrum Master",
                    required: ['Scrum', 'Agile', 'Jira', 'Kanban', 'Facilitation', 'Sprint Planning', 'Retrospectives', 'Product Backlog', 'Agile Coaching', 'Conflict Resolution', 'Scaled Agile', 'SAFe'],
                    legacy: ['Note Taking', 'Meeting Scheduling', 'Excel', 'Data Entry', 'Filing'],
                    marketDescription: "Scrum Masters act as facilitators of developer throughput. Recruiter queries filter out secretaries, focusing entirely on Agile coaching and backlog leadership."
                },
                seo_specialist: {
                    title: "Technical SEO Specialist",
                    required: ['SEO', 'Google Search Console', 'Google Analytics', 'Keyword Research', 'Ahrefs', 'SEMrush', 'On-Page SEO', 'Technical SEO', 'Link Building', 'Schema Markup', 'Content Strategy', 'Local SEO'],
                    legacy: ['Social Media Posting', 'Microsoft Word', 'Canva', 'Data Entry'],
                    marketDescription: "Search optimization relies heavily on engineering crawlers, semantics, and index tuning. Highlight crawling audits over general visual posting templates."
                },
                sales_engineer: {
                    title: "Solutions / Sales Engineer",
                    required: ['Sales Engineering', 'Technical Sales', 'B2B SaaS', 'Product Demos', 'RFP Response', 'Solutions Architecture', 'Customer Discovery', 'Enterprise Sales', 'Consultative Selling', 'CRM', 'Technical Presentations'],
                    legacy: ['Cold Calling', 'Excel', 'Data Entry', 'Customer Support'],
                    marketDescription: "Sales Engineers translate technology concepts into enterprise validation cycles. Recruiters require robust architecture blueprints and consultative selling depth."
                },
                solutions_architect: {
                    title: "Solutions Architect",
                    required: ['Solutions Architecture', 'System Design', 'Enterprise Integration', 'B2B Architecture', 'SaaS Architecture', 'API Design', 'Cloud Infrastructure', 'Microservices', 'UML', 'Technical Strategy', 'Pre-Sales'],
                    legacy: ['Excel', 'cPanel', 'FTP', 'Manual Data Entry'],
                    marketDescription: "Solutions Architects align organizational capabilities to systems design. Highlight modern microservices, integrations, and corporate roadmaps over server management basics."
                },
                database_admin: {
                    title: "Database Administrator (DBA)",
                    required: ['Database Administration', 'SQL Server', 'Oracle', 'PostgreSQL', 'MySQL', 'Performance Tuning', 'Backup & Recovery', 'NoSQL', 'MongoDB', 'Index Optimization', 'Database Clustering', 'High Availability'],
                    legacy: ['Excel', 'Microsoft Word', 'HTML', 'CSS', 'Dreamweaver'],
                    marketDescription: "DBAs ensure database uptime, high-availability clusters, and recovery plans. Highlight indexing optimization rather than basic web spreadsheets."
                },
                mobile_dev: {
                    title: "Mobile App Developer (iOS/Android)",
                    required: ['Swift', 'Kotlin', 'Objective-C', 'Java', 'iOS Development', 'Android Development', 'React Native', 'Flutter', 'Mobile UI', 'App Store Publishing', 'CoreData', 'Jetpack Compose', 'Xcode'],
                    legacy: ['HTML', 'CSS', 'WordPress', 'PHP', 'Dreamweaver'],
                    marketDescription: "Mobile developers engineer high-performance native user interfaces. Focus heavily on native device patterns, compilation tools, and app store lifecycles."
                },
                cto: {
                    title: "Chief Technology Officer (CTO)",
                    required: ['CTO', 'Technology Strategy', 'Engineering Leadership', 'Technical Architecture', 'R&D', 'Product Scaling', 'Team Building', 'Budgeting', 'Technical Vision', 'Mergers & Acquisitions', 'Executive Communication', 'Vendor Management'],
                    legacy: ['Writing Code', 'Manual Testing', 'Jira Ticket Creation', 'Note Taking', 'Excel'],
                    marketDescription: "Executive tech leadership is focused on operational margins, scaling tech strategy, and scaling talent. Highlight high-level technology roadmaps rather than line-by-line coding."
                },
                ciso: {
                    title: "Chief Information Security Officer (CISO)",
                    required: ['CISO', 'Information Security Strategy', 'Risk Management', 'Compliance', 'ISO 27001', 'SOC 2', 'GDPR', 'Security Auditing', 'Incident Command', 'Security Governance', 'Executive Communication', 'Enterprise Risk'],
                    legacy: ['Manual Scanning', 'Firewall Config', 'Customer Support', 'Data Entry'],
                    marketDescription: "CISO roles require risk management and compliance strategy. Focus heavily on regulatory policies, compliance audits, and security strategy."
                },
                digital_product_designer: {
                    title: "Digital Product Designer",
                    required: ['Product Design', 'UI/UX', 'Figma', 'Design Strategy', 'Interaction Design', 'Design Systems', 'Rapid Prototyping', 'User Research', 'Customer Journeys', 'SaaS Design', 'Mobile App Design'],
                    legacy: ['Graphic Design', 'Photoshop Crop', 'Illustrator Logos', 'HTML', 'CSS'],
                    marketDescription: "Product design demands rigorous data integration, validation strategies, and design patterns. Move past flat graphic assets to interactive user workflows."
                },
                data_engineer: {
                    title: "Data Pipeline & Infrastructure Engineer",
                    required: ['Data Engineering', 'ETL Pipelines', 'Apache Spark', 'Apache Airflow', 'Kafka', 'Hadoop', 'SQL', 'Data Warehousing', 'Snowflake', 'Redshift', 'Python', 'Scala', 'Big Data', 'Data Modeling'],
                    legacy: ['Excel', 'Access Databases', 'PowerPoint', 'Data Entry', 'Word'],
                    marketDescription: "Data Engineers build scalable data pipelines. Emphasize data orchestration, streaming protocols (Kafka), and enterprise data lake architectures."
                },
                customer_success_manager: {
                    title: "Customer Success Manager (B2B)",
                    required: ['Customer Success', 'B2B SaaS', 'Churn Reduction', 'Account Management', 'Onboarding', 'CRM', 'Salesforce', 'Customer Retention', 'Upselling', 'KPI Tracking', 'Customer Advocacy', 'NPS'],
                    legacy: ['Answering Phones', 'Typing', 'Data Entry', 'Filing', 'Microsoft Word'],
                    marketDescription: "Customer Success focuses on post-sale account optimization and expansion metrics. Recruiters filter out administrative assistants, prioritizing churn protection."
                },
                hr_talent_acquisition: {
                    title: "HR & Talent Acquisition Lead",
                    required: ['Talent Acquisition', 'Technical Recruiting', 'Sourcing', 'Applicant Tracking Systems', 'ATS', 'Candidate Experience', 'Employer Branding', 'HR Strategy', 'Onboarding', 'Behavioral Interviewing', 'Compensation & Benefits'],
                    legacy: ['Filing', 'Answering Phones', 'Scheduling Meetings', 'Data Entry', 'Word'],
                    marketDescription: "Recruitment leads orchestrate technical sourcing strategy and talent optimization. Highlight sourcing pipeline architectures over office scheduling tasks."
                },
                business_analyst: {
                    title: "Business Systems Analyst",
                    required: ['Business Analysis', 'Requirements Gathering', 'Jira', 'SQL', 'Tableau', 'Power BI', 'User Stories', 'Process Mapping', 'UML', 'Agile', 'Gap Analysis', 'Stakeholder Management', 'Data Modeling'],
                    legacy: ['Data Entry', 'Filing', 'Note Taking', 'Excel Macros', 'Word'],
                    marketDescription: "Business Analysts map technical possibilities to process bottlenecks. Emphasize metrics dashboarding and user stories over basic text templates."
                },
                systems_administrator: {
                    title: "Systems Administrator",
                    required: ['Systems Administration', 'Linux', 'Windows Server', 'Active Directory', 'Virtualization', 'VMware', 'Hyper-V', 'Networking', 'DNS', 'DHCP', 'Shell Scripting', 'System Backups', 'IT Support'],
                    legacy: ['Answering Phones', 'Excel', 'Word', 'Filing', 'Printer Setup'],
                    marketDescription: "System Administrators ensure enterprise systems are reliable and secure. Focus on script automation and host networking setups."
                },
                devsecops_engineer: {
                    title: "DevSecOps Security Engineer",
                    required: ['DevSecOps', 'CI/CD Security', 'SAST', 'DAST', 'Container Security', 'Vulnerability Scanning', 'SonarQube', 'Docker Security', 'AWS IAM', 'Compliance as Code', 'GitLab CI', 'Infrastructure Security'],
                    legacy: ['HTML', 'CSS', 'Manual Auditing', 'Excel', 'Access'],
                    marketDescription: "DevSecOps integrates security into release pipelines. Highlight compliance-as-code and static analysis integrations."
                },
                financial_analyst: {
                    title: "Corporate Financial Analyst",
                    required: ['Financial Analyst', 'Corporate Finance', 'Financial Modeling', 'Valuation', 'M&A', 'FP&A', 'SQL', 'Python', 'Forecasting', 'Budgeting', 'Investment Banking', 'Capital Allocation', 'VBA'],
                    legacy: ['Bookkeeping', 'Data Entry', 'Word', 'Filing', 'Answering Phones'],
                    marketDescription: "Financial analysts optimize modeling structures and predict asset allocations. Highlight advanced corporate forecasts over basic ledger logs."
                },
                it_project_manager: {
                    title: "IT Project Manager (PMP)",
                    required: ['IT Project Management', 'PMP', 'Agile', 'Waterfall', 'Jira', 'Scope Management', 'Risk Management', 'Budgeting', 'Resource Allocation', 'Stakeholder Communication', 'MS Project', 'Confluence', 'Scrum'],
                    legacy: ['Scheduling Meetings', 'Note Taking', 'Filing', 'Data Entry', 'Word'],
                    marketDescription: "Project managers oversee budget, timeline risk, and cross-functional teams. Focus on delivery metrics over basic meeting organization."
                },

                // --- 30 ADDITIONAL NEW ROLES ---
                mlops_engineer: {
                    title: "MLOps & Platform Engineer",
                    required: ['MLOps', 'Kubeflow', 'MLflow', 'DVC', 'CI/CD', 'AWS SageMaker', 'Docker', 'Kubernetes', 'Feature Store', 'Model Monitoring', 'Python', 'Airflow', 'BentoML', 'Triton'],
                    legacy: ['Excel', 'Word', 'HTML', 'CSS', 'Manual Testing'],
                    marketDescription: "MLOps engineers codify machine learning lifecycles. Emphasize platform orchestration, vector scaling, and automation pipelines over static documentation."
                },
                data_architect: {
                    title: "Enterprise Data Architect",
                    required: ['Data Architecture', 'Data Modeling', 'Data Governance', 'Snowflake', 'Databricks', 'ERD', 'Data Lake', 'Schema Design', 'MDM', 'SQL', 'NoSQL', 'Enterprise Data Strategy', 'Data Lineage'],
                    legacy: ['Excel', 'Filing', 'Note Taking', 'Word', 'Data Entry'],
                    marketDescription: "Data Architects structure structural business hierarchies. Recruiter alignments focus entirely on data warehousing systems over general reporting utilities."
                },
                penetration_tester: {
                    title: "Penetration Tester (Red Teamer)",
                    required: ['Penetration Testing', 'Metasploit', 'Kali Linux', 'Burp Suite', 'Ethical Hacking', 'Red Teaming', 'Vulnerability Exploitation', 'OWASP Top 10', 'Reverse Engineering', 'Nmap', 'Scripting', 'OSCP'],
                    legacy: ['Customer Support', 'Data Entry', 'Word', 'Excel'],
                    marketDescription: "Red Teamers perform simulated breaches. Highlight tactical network exploits, script writing, and vulnerabilities auditing over basic helpdesk tasks."
                },
                security_architect: {
                    title: "Enterprise Security Architect",
                    required: ['Security Architecture', 'Zero Trust', 'IAM', 'SABSA', 'Cloud Security', 'Cryptography', 'Enterprise Risk', 'Threat Modeling', 'CISSP', 'Network Security', 'Security Policies', 'Compliance'],
                    legacy: ['Excel', 'cPanel', 'FTP', 'Manual Data Entry'],
                    marketDescription: "Security Architects govern enterprise threat portfolios. Show robust Zero-Trust strategies rather than firewall installations."
                },
                site_reliability_engineer: {
                    title: "Site Reliability Engineer (SRE)",
                    required: ['SRE', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana', 'Chaos Engineering', 'Incident Response', 'Linux', 'Bash', 'Go', 'Python', 'SLOs/SLIs', 'Post-Mortems', 'High Availability'],
                    legacy: ['Manual Testing', 'HTML', 'CSS', 'Dreamweaver', 'Word'],
                    marketDescription: "SREs treat operations as software problems. Focus on latency reduction, automated scale tools, and system SLO metrics."
                },
                frontend_architect: {
                    title: "Lead Front-End Architect",
                    required: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Micro-Frontends', 'Design Systems', 'Web Performance', 'Webpack', 'Vite', 'CSS Architecture', 'Tailwind', 'State Management', 'Monorepos'],
                    legacy: ['jQuery', 'Bootstrap', 'WordPress', 'PHP', 'Dreamweaver'],
                    marketDescription: "Front-End Architects structure complex clientside user sessions. Emphasize micro-framework configurations and state trees rather than static styling."
                },
                embedded_software_engineer: {
                    title: "Embedded Systems Developer",
                    required: ['C', 'C++', 'RTOS', 'Microcontrollers', 'ARM', 'SPI', 'I2C', 'UART', 'Bare-Metal', 'Device Drivers', 'Firmware', 'Logic Analyzers', 'Oscilloscope', 'IoT'],
                    legacy: ['HTML', 'CSS', 'WordPress', 'Excel', 'PowerPoint'],
                    marketDescription: "Embedded developers program directly on silicon. Emphasize hardware registers, driver engineering, and RTOS configurations."
                },
                firmware_engineer: {
                    title: "Firmware Engineer",
                    required: ['Firmware', 'C', 'Assembly', 'RTOS', 'Bootloaders', 'Hardware-Software Integration', 'ARM Cortex', 'FPGA', 'Verilog', 'Oscilloscope', 'Memory Management', 'Embedded Systems'],
                    legacy: ['HTML', 'CSS', 'Excel', 'Word', 'Filing'],
                    marketDescription: "Firmware experts build core system logic. Show bare-metal execution depth over standard web styling systems."
                },
                iot_solutions_architect: {
                    title: "IoT Solutions Architect",
                    required: ['IoT', 'MQTT', 'CoAP', 'Edge Computing', 'AWS IoT', 'Azure IoT', 'Embedded Systems', 'Wireless Protocols', 'Zigbee', 'LoraWAN', 'Smart Devices', 'Sensor Networks', 'Gateway Architecture'],
                    legacy: ['WordPress', 'FTP', 'cPanel', 'Excel', 'Word'],
                    marketDescription: "IoT Architects design unified sensor topologies. Focus on micro-protocol architectures and massive mesh networks."
                },
                vr_ar_developer: {
                    title: "XR/VR/AR Developer",
                    required: ['Unity', 'Unreal Engine', 'C#', 'C++', 'ARKit', 'ARCore', 'WebXR', '3D Math', 'Spatial Computing', 'Shader Programming', 'Oculus SDK', 'Blender', 'Interaction Design'],
                    legacy: ['WordPress', 'HTML', 'CSS', 'Canva', 'Data Entry'],
                    marketDescription: "XR developers build spatial user interfaces. Highlight real-time rendering logic and vector geometry over common website templates."
                },
                vpe: {
                    title: "Vice President of Engineering (VPE)",
                    required: ['Engineering Leadership', 'Technical Strategy', 'Organizational Design', 'Scaled Agile', 'System Architecture', 'Budget Allocation', 'Career Development', 'Executive Leadership', 'Recruiting Strategy', 'Delivery Management', 'Resource Planning'],
                    legacy: ['Writing Code', 'Manual Testing', 'Note Taking', 'Excel', 'Jira ticket edit'],
                    marketDescription: "VPEs govern organizational structures and operational velocity. Highlight capital efficiency, team layouts, and technical roadmap delivery."
                },
                chief_data_officer: {
                    title: "Chief Data Officer (CDO)",
                    required: ['CDO', 'Data Strategy', 'Data Governance', 'Information Architecture', 'Data Monetization', 'Enterprise Risk', 'MDM', 'Compliance', 'Business Intelligence', 'Analytics Strategy', 'Executive Leadership', 'Corporate Strategy'],
                    legacy: ['SQL Querying', 'Data Entry', 'Excel Macros', 'Filing', 'Word'],
                    marketDescription: "Chief Data Officers treat data as a strategic corporate asset. Show data valuation and corporate governance rather than simple query writing."
                },
                chief_product_officer: {
                    title: "Chief Product Officer (CPO)",
                    required: ['CPO', 'Product Strategy', 'Product Vision', 'Portfolio Management', 'Market Disruption', 'GTM Strategy', 'Executive Leadership', 'Product Organization Design', 'Mergers & Acquisitions', 'Pricing Strategy', 'Growth Marketing'],
                    legacy: ['Jira tickets', 'Wireframing', 'Excel', 'Meeting Scheduling', 'Note Taking'],
                    marketDescription: "CPOs define product categories and market strategies. Emphasize portfolio margin structures and market transformations."
                },
                it_director: {
                    title: "Director of Information Technology",
                    required: ['IT Leadership', 'Enterprise Systems', 'Budgeting', 'Vendor Management', 'IT Governance', 'Infrastructure Strategy', 'Disaster Recovery', 'SaaS Operations', 'Information Security', 'Team Building', 'Asset Management'],
                    legacy: ['Installing RAM', 'Printer setup', 'Answering phones', 'Excel', 'Filing'],
                    marketDescription: "IT Directors oversee global enterprise networks. Highlight operational continuity and infrastructure strategy over desktop maintenance."
                },
                delivery_manager: {
                    title: "Agile Delivery Manager",
                    required: ['Delivery Management', 'Agile Delivery', 'Scrum', 'Kanban', 'Jira', 'Resource Allocation', 'Roadmap Execution', 'Dependency Mapping', 'Conflict Resolution', 'Process Optimization', 'Metrics & Reporting', 'Agile Coach'],
                    legacy: ['Excel Formulas', 'Note Taking', 'Filing', 'Meeting Scheduling', 'Data Entry'],
                    marketDescription: "Delivery Managers accelerate process throughput. Recruiter validations value dependency mapping and pipeline optimizations."
                },
                program_manager: {
                    title: "Technical Program Manager (TPM)",
                    required: ['Program Management', 'Cross-Functional Leadership', 'Risk Management', 'Dependency Mapping', 'Technical Strategy', 'Jira', 'Agile', 'Scale Delivery', 'Stakeholder Communication', 'System Design', 'Scope Definition'],
                    legacy: ['Meeting Scheduling', 'Note Taking', 'Data Entry', 'Filing', 'Word'],
                    marketDescription: "TPMs run highly complex system integrations. Emphasize scope management and dependency diagrams over simple note taking."
                },
                customer_experience_director: {
                    title: "Customer Experience (CX) Director",
                    required: ['Customer Experience', 'CX Strategy', 'Customer Journey Mapping', 'User Research', 'NPS', 'Customer Success', 'SaaS Operations', 'Voice of Customer', 'Design Thinking', 'Brand Strategy', 'Analytics'],
                    legacy: ['Answering Phones', 'Filing', 'Typing', 'Word', 'Data Entry'],
                    marketDescription: "CX Directors govern retention and loyalty vectors. Emphasize design thinking and customer analytics over administrative support."
                },
                product_marketing_manager: {
                    title: "Product Marketing Manager (PMM)",
                    required: ['Product Marketing', 'GTM Strategy', 'Market Segmentation', 'Competitive Analysis', 'Product Positioning', 'Sales Enablement', 'Buyer Personas', 'Pricing Strategy', 'Copywriting', 'Product Launches', 'Value Metrics'],
                    legacy: ['Social Media Posting', 'Canva Graphics', 'Typing', 'Filing', 'Data Entry'],
                    marketDescription: "PMMs establish product categories and launches. Highlight buyer personas, competitive analysis, and sales enablement frameworks."
                },
                brand_strategist: {
                    title: "Brand Strategist",
                    required: ['Brand Strategy', 'Brand Positioning', 'Market Research', 'Consumer Insights', 'Brand Identity', 'Narrative Architecture', 'Marketing Strategy', 'Competitive Strategy', 'Campaign Strategy', 'SaaS Branding'],
                    legacy: ['Social Media Posting', 'Canva', 'Filing', 'Answering Phones', 'Word'],
                    marketDescription: "Brand Strategists define enterprise narratives. Emphasize competitive positioning, consumer insights, and campaign strategies."
                },
                creative_director: {
                    title: "Creative Director",
                    required: ['Creative Direction', 'Brand Strategy', 'Design Leadership', 'Copywriting', 'Art Direction', 'Concept Development', 'Campaign Strategy', 'Design Systems', 'Visual Storytelling', 'UX/UI Design'],
                    legacy: ['Photoshop cropping', 'Typing', 'Data Entry', 'Excel', 'Word'],
                    marketDescription: "Creative Directors govern brand aesthetics. Emphasize art direction, creative strategies, and interactive stories."
                },
                content_strategist: {
                    title: "Content Strategist & Content Architect",
                    required: ['Content Strategy', 'Content Architecture', 'Copywriting', 'SEO', 'Content Marketing', 'Narrative Design', 'Editorial Calendar', 'B2B Content', 'Conversion Rate Optimization', 'UX Writing'],
                    legacy: ['Typing', 'Filing', 'Social Media Posting', 'Excel', 'Word'],
                    marketDescription: "Content Strategists manage digital editorial value. Focus on user onboarding content strategy and organic SEO search pipelines."
                },
                financial_risk_manager: {
                    title: "Financial Risk Manager (FRM)",
                    required: ['Financial Risk', 'FRM', 'Risk Modeling', 'VaR', 'Credit Risk', 'Market Risk', 'Compliance', 'Stress Testing', 'Financial Modeling', 'Quantitative Analysis', 'Capital Allocation'],
                    legacy: ['Bookkeeping', 'Excel Formulas', 'Data Entry', 'Filing', 'Answering Phones'],
                    marketDescription: "FRM professionals design risk portfolios. Highlight asset valuation modeling and stress tests over bookkeeping."
                },
                investment_analyst: {
                    title: "Venture Capital / PE Analyst",
                    required: ['Venture Capital', 'Private Equity', 'Valuation', 'Due Diligence', 'Financial Modeling', 'Market Research', 'Deal Sourcing', 'M&A', 'Equity Research', 'Cap Table', 'Investment Thesis'],
                    legacy: ['Excel Data Entry', 'Word', 'Filing', 'Answering Phones', 'Note Taking'],
                    marketDescription: "Investment Analysts screen capitalization models. Highlight deal diligence and corporate financial architecture."
                },
                legal_tech_consultant: {
                    title: "Legal Tech Consultant",
                    required: ['Legal Tech', 'Legal Operations', 'Contract Lifecycle Management', 'E-Discovery', 'Process Automation', 'Legal Systems', 'Information Governance', 'Compliance', 'Enterprise Software'],
                    legacy: ['Word', 'Filing', 'Note Taking', 'Excel', 'Answering Phones'],
                    marketDescription: "Legal Tech Specialists automate legal processes. Focus on process automation, contract tools, and system audits."
                },
                business_development_director: {
                    title: "Director of Business Development",
                    required: ['Business Development', 'Strategic Partnerships', 'Enterprise Sales', 'GTM Strategy', 'Deal Structuring', 'Contract Negotiation', 'Executive Relationship Management', 'Pipeline Growth', 'B2B SaaS'],
                    legacy: ['Cold Calling', 'Excel', 'Data Entry', 'Answering Phones', 'Filing'],
                    marketDescription: "Business Development Leads design strategic partnerships. Highlight deal structuring and contract negotiations over cold calling."
                },
                operations_director: {
                    title: "Director of Operations",
                    required: ['Operations Management', 'Process Optimization', 'KPIs & Metrics', 'Resource Planning', 'Budgeting', 'Scaling Operations', 'Supply Chain', 'Cross-Functional Leadership', 'Enterprise Strategy'],
                    legacy: ['Filing', 'Typing', 'Answering Phones', 'Jira Tickets', 'Word'],
                    marketDescription: "Operations Directors scale operational matrices. Focus on cost optimization and enterprise logistics strategies."
                },
                scrum_coach: {
                    title: "Enterprise Agile Coach",
                    required: ['Agile Coaching', 'Scaled Agile', 'SAFe', 'Organizational Transformation', 'Scrum', 'Kanban', 'Leadership Coaching', 'Facilitation', 'Change Management', 'Team Maturity'],
                    legacy: ['Meeting Scheduling', 'Note Taking', 'Excel', 'Jira tickets', 'Filing'],
                    marketDescription: "Agile Coaches govern organizational change. Highlight transformation blueprints and leadership coaching over task management."
                },
                bi_architect: {
                    title: "Business Intelligence Architect",
                    required: ['BI Architecture', 'Data Warehousing', 'Tableau', 'Power BI', 'SQL', 'ETL', 'Data Modeling', 'Data Visualization', 'SSAS', 'SSIS', 'Metadata Management', 'Enterprise Reporting'],
                    legacy: ['Data Entry', 'Filing', 'Note Taking', 'Excel Sheets', 'Word'],
                    marketDescription: "BI Architects design decision engines. Highlight enterprise data warehouses and metadata modeling."
                },
                cloud_security_engineer: {
                    title: "Cloud Security Engineer",
                    required: ['Cloud Security', 'AWS IAM', 'Terraform Security', 'Kubernetes Security', 'DevSecOps', 'Vulnerability Management', 'CloudTrail', 'GuardDuty', 'Security Auditing', 'Compliance'],
                    legacy: ['Excel', 'Manual Auditing', 'Word', 'Filing', 'Answering Phones'],
                    marketDescription: "Cloud Security Engineers safeguard microservices. Highlight infrastructure-as-code validation and policy audits."
                },
                devops_manager: {
                    title: "DevOps Manager",
                    required: ['DevOps Leadership', 'Site Reliability', 'Cloud Strategy', 'CI/CD Orchestration', 'Infrastructure Strategy', 'Team Management', 'Budgeting', 'Agile Delivery', 'SRE Governance'],
                    legacy: ['Manual Testing', 'HTML', 'CSS', 'Note Taking', 'Excel'],
                    marketDescription: "DevOps Managers oversee platform delivery. Highlight infrastructure strategies, cloud budgets, and SRE governance."
                },
                educator_teacher: {
                    title: "High School Educator / Teacher",
                    required: ['Curriculum Development', 'Pedagogical Frameworks', 'Classroom Management', 'Lesson Planning', 'Student Assessments', 'Educational Technology', 'EdTech', 'Differentiated Instruction', 'Special Education', 'Parent Communication', 'Academic Advising', 'STEM Education', 'Literacy Development', 'Interactive Learning'],
                    legacy: ['Babysitting', 'Word Processing', 'Typing', 'Excel', 'Filing'],
                    marketDescription: "Educational leaders construct modern curricula, manage classrooms, and employ pedagogy frameworks. Move past simple tutoring to systemic learning designs."
                },
                attorney_lawyer: {
                    title: "Corporate Attorney / Lawyer",
                    required: ['Corporate Law', 'Legal Writing', 'Contract Negotiation', 'Dispute Resolution', 'Legal Compliance', 'Risk Assessment', 'Due Diligence', 'Intellectual Property', 'IP Strategy', 'Mergers & Acquisitions', 'Legal Advocacy', 'Case Analysis', 'Legal Auditing'],
                    legacy: ['Typing', 'Note Taking', 'Filing', 'Answering Phones', 'Scheduling'],
                    marketDescription: "Legal authorities govern corporate compliance, contract blueprints, risk management, and litigation strategies. Focus heavily on legal engineering over basic document filing."
                },
                technical_writer_author: {
                    title: "Professional Author / Writer",
                    required: ['Creative Writing', 'Narrative Architecture', 'Book Publishing', 'Self-Publishing', 'Copywriting', 'Editing', 'Content Strategy', 'Storytelling', 'Manuscript Preparation', 'Character Development', 'Creative Direction', 'Intellectual Property', 'Author Branding', 'Ghostwriting', 'Book Marketing'],
                    legacy: ['Social Media Posting', 'Canva Graphics', 'Data Entry', 'Word'],
                    marketDescription: "Authors structure complex narratives, publish books, and manage creative intellectual properties. Highlight editorial governance over basic blog posting."
                },
                academic_professor: {
                    title: "Academic Professor / Researcher",
                    required: ['Higher Education', 'Academic Research', 'Scholarly Publishing', 'Peer Review', 'Grant Writing', 'Curriculum Design', 'Higher Ed Pedagogy', 'Lectures', 'Scientific Methodology', 'Academic Governance', 'Thesis Advising', 'Data Analysis', 'Symposia Presentation'],
                    legacy: ['Grading Papers', 'Word Processing', 'Typing', 'Excel', 'Note Taking'],
                    marketDescription: "University professors lead scholarly research, publish peer-reviewed papers, and govern academic divisions. Highlight peer-reviewed contributions over standard tutoring."
                },
                mathematician: {
                    title: "Research Mathematician",
                    required: ['Mathematical Modeling', 'Abstract Algebra', 'Calculus', 'Linear Algebra', 'Statistical Analysis', 'Algorithmic Design', 'Cryptography', 'Quantitative Research', 'Numerical Analysis', 'Operations Research', 'R', 'MATLAB', 'Mathematical Proofs', 'Optimization Theory'],
                    legacy: ['Excel', 'Bookkeeping', 'Data Entry', 'Word', 'Filing'],
                    marketDescription: "Mathematicians structure quantitative algorithms, statistical proofs, and cryptographic architectures. Focus on numerical engineering over spreadsheets."
                },
                physicist: {
                    title: "Research Physicist",
                    required: ['Computational Physics', 'Thermodynamics', 'Quantum Mechanics', 'Electromagnetism', 'Experimental Physics', 'Data Analysis', 'Mathematical Modeling', 'MATLAB', 'Python', 'LabVIEW', 'Scientific Computing', 'Statistical Modeling', 'Mechanics', 'Physics Simulations'],
                    legacy: ['Excel', 'Customer Support', 'Word', 'Filing', 'Data Entry'],
                    marketDescription: "Physicists engineer computational physics models, thermodynamics setups, and experimental systems. Focus on advanced simulations over desktop support."
                },
                historian: {
                    title: "Academic Historian / Archivist",
                    required: ['Historical Research', 'Archival Management', 'Primary Source Analysis', 'Scholarly Writing', 'Academic Research', 'Cultural Heritage', 'Curatorial Practice', 'Historiography', 'Document Preservation', 'Public History', 'Qualitative Analysis', 'Oral History'],
                    legacy: ['Social Media Posting', 'Word', 'Typing', 'Answering Phones'],
                    marketDescription: "Historians model historical trends, analyze archival primary sources, and publish cultural research papers. Highlight historical analysis over general blogging."
                },
                medical_doctor: {
                    title: "Medical Doctor (MD / GP)",
                    required: ['Clinical Diagnostics', 'Patient Care', 'Medical Ethics', 'Internal Medicine', 'Family Medicine', 'Electronic Health Records', 'EHR', 'Pharmacology', 'Preventative Medicine', 'Medical Education', 'Clinical Governance', 'Diagnostic Medicine', 'Cardiology'],
                    legacy: ['Medical Scribing', 'Excel', 'Typing', 'Data Entry', 'Answering Phones'],
                    marketDescription: "Doctors formulate clinical diagnostics, medical guidelines, and patient treatment models. Highlight specialized clinical governance over basic medical scribe."
                },
                medical_surgeon: {
                    title: "Medical Surgeon (Specialist)",
                    required: ['Surgical Procedures', 'Operating Theater', 'Patient Safety', 'Medical Robotics', 'Minimally Invasive Surgery', 'Surgical Oncology', 'Trauma Surgery', 'Anatomy', 'Orthopedics', 'Post-Operative Care', 'Clinical Research', 'Pre-Operative Assessment'],
                    legacy: ['Answering Phones', 'Excel', 'Scribing', 'Customer Service', 'Word'],
                    marketDescription: "Surgeons orchestrate highly complex operating theater setups and surgical plans. Focus on advanced procedures over general practice."
                },
                executive_coach: {
                    title: "Executive Leadership Coach",
                    required: ['Executive Coaching', 'Leadership Development', 'Emotional Intelligence', 'Strategic Communication', 'Conflict Resolution', 'Change Management', 'Team Dynamics', 'Talent Development', 'Corporate Strategy', 'Feedback Delivery', 'Facilitation'],
                    legacy: ['Excel', 'Scheduling Meetings', 'Note Taking', 'Word', 'Filing'],
                    marketDescription: "Coaches facilitate organizational leadership changes, executive communication blueprints, and management frameworks. Move past standard mentoring."
                },
                journalist: {
                    title: "Investigative Journalist / Reporter",
                    required: ['Investigative Journalism', 'News Reporting', 'Feature Writing', 'Copywriting', 'Editing', 'Media Relations', 'Broadcast Journalism', 'Media Law', 'Primary Source Interviews', 'Fact-Checking', 'Digital Media', 'Content Curation', 'Narrative Journalism'],
                    legacy: ['Blogging', 'Canva Graphics', 'Word', 'Data Entry', 'Excel'],
                    marketDescription: "Journalists conduct primary source interviews, investigative writing, and editorial curation. Focus on rigorous reporting over simple community blogging."
                },
                psychologist: {
                    title: "Clinical Psychologist / Therapist",
                    required: ['Clinical Psychology', 'Psychological Assessment', 'Psychotherapy', 'Cognitive Behavioral Therapy', 'CBT', 'Mental Health', 'Counseling', 'Crisis Intervention', 'Diagnostic Practice', 'Treatment Planning', 'Ethics'],
                    legacy: ['Note Taking', 'Scheduling', 'Word Processing', 'Excel', 'Data Entry'],
                    marketDescription: "Therapists manage clinical assessments, cognitive behavioral models, and psychological counseling. Highlight therapeutic clinical governance over mentoring."
                },
                financial_advisor: {
                    title: "Certified Financial Planner / Advisor",
                    required: ['Financial Planning', 'Wealth Management', 'Asset Allocation', 'Retirement Strategy', 'Investment Advisory', 'Tax Strategy', 'Risk Management', 'Estate Planning', 'Client Relationship Management', 'Portfolio Optimization', 'CFP'],
                    legacy: ['Bookkeeping', 'Data Entry', 'Word', 'Filing', 'Answering Phones'],
                    marketDescription: "Financial advisors structure asset allocations, wealth management portfolios, and retirement strategies. Focus on capital planning over basic bookkeeping."
                },
                architect_structural: {
                    title: "Structural Architect (Buildings)",
                    required: ['Architecture Design', 'Revit', 'AutoCAD', 'Building Information Modeling', 'BIM', 'Building Codes', 'Construction Documentation', 'Spatial Planning', 'Visual Design', 'Blueprint Design', 'Structural Integration', 'Design Strategy'],
                    legacy: ['Graphic Design', 'Excel', 'Word', 'Manual Drafting', 'cPanel'],
                    marketDescription: "Structural architects govern blueprint designs, spatial layouts, and construction planning. Highlight building design systems over flat drafts."
                },
                public_relations: {
                    title: "Public Relations (PR) Director",
                    required: ['Public Relations', 'Media Relations', 'Strategic Communication', 'Crisis Management', 'Press Releases', 'Brand Management', 'Event Strategy', 'Corporate Communication', 'Stakeholder Engagement', 'Media Campaigns', 'Reputation Management'],
                    legacy: ['Social Media Posting', 'Canva Graphics', 'Word', 'Filing', 'Data Entry'],
                    marketDescription: "PR Directors govern brand reputation, media crisis responses, and corporate press strategies. Focus on crisis strategy over simple community posting."
                },
                human_resources_director: {
                    title: "Director of Human Resources",
                    required: ['HR Strategy', 'Employee Relations', 'Organizational Development', 'Talent Management', 'Workforce Planning', 'HR Compliance', 'Compensation & Benefits', 'Performance Management', 'Succession Planning', 'Executive Recruiting', 'Change Management'],
                    legacy: ['Scheduling Meetings', 'Note Taking', 'Excel', 'Jira', 'Filing'],
                    marketDescription: "HR Directors govern organizational culture, workforce allocations, and talent policies. Focus on talent optimization strategy over secretarial tasks."
                },
                economist: {
                    title: "Research Economist / Policy Analyst",
                    required: ['Economics', 'Econometrics', 'Quantitative Research', 'Policy Analysis', 'Statistical Analysis', 'Financial Modeling', 'Data Analysis', 'Forecasting', 'R', 'Python', 'SQL', 'Academic Writing', 'Microeconomics', 'Macroeconomics'],
                    legacy: ['Bookkeeping', 'Data Entry', 'Word', 'Filing', 'Excel'],
                    marketDescription: "Economists evaluate econometric pipelines, financial forecasts, and public policy impact. Focus on macro modeling over simple bookkeeping."
                },
                graphic_artist: {
                    title: "Fine Artist / Illustrator",
                    required: ['Visual Art', 'Illustration', 'Fine Art', 'Creative Direction', 'Digital Illustration', 'Visual Storytelling', 'Concept Art', 'Adobe Photoshop', 'Painting', 'Concept Development', 'Graphic Illustration', 'Visual Branding'],
                    legacy: ['cPanel', 'HTML', 'CSS', 'Excel', 'Word', 'Photoshop Crop'],
                    marketDescription: "Visual artists govern visual storytelling, creative illustration, and fine art commissions. Focus on creative design systems over simple cropping."
                },
                translator_linguist: {
                    title: "Professional Translator / Linguist",
                    required: ['Translation', 'Linguistics', 'Localization', 'Editing', 'Proofreading', 'Language Instruction', 'Subtitling', 'Interpretation', 'Intercultural Communication', 'Language Services', 'Creative Copywriting', 'Transcription'],
                    legacy: ['Typing', 'Note Taking', 'Word Processing', 'Answering Phones', 'Filing'],
                    marketDescription: "Linguists govern systematic translation, cognitive linguistics, and localized narrative adaptations. Focus on linguistics engineering over simple word typing."
                },
                real_estate_broker: {
                    title: "Commercial Real Estate Broker",
                    required: ['Commercial Real Estate', 'Property Valuation', 'Lease Negotiation', 'Real Estate Investment', 'Deal Structuring', 'Market Analysis', 'Contract Negotiation', 'B2B Sales', 'Portfolio Optimization', 'Due Diligence', 'Financial Modeling'],
                    legacy: ['Cold Calling', 'Excel', 'Data Entry', 'Filing', 'Word'],
                    marketDescription: "Commercial brokers structure capital asset transactions, lease negotiations, and real estate investments. Focus on property asset valuation over basic cold calls."
                }
            }
        };
    }

    // --- SECTION 1: DRAFT PARSER (HEURISTICS) ---
    parseRawProfile(rawText) {
        if (!rawText || rawText.trim() === '') {
            return null;
        }

        const lines = rawText.split('\n').map(l => l.trim());
        let result = {
            ha: '',
            skills: '',
            ends: '',
            port: '',
            arts: '',
            log: []
        };

        let currentSection = 'headline_about';
        let headlineText = [];
        let aboutText = [];
        let experienceText = [];
        let skillsFound = [];
        let endorsementsCount = 0;
        let linksFound = [];
        let postsText = [];
        let awardsText = [];

        // Simple line parser
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const lowerLine = line.toLowerCase().trim();

            if (line.length === 0) continue;

            // Heuristic detection of section headers with extremely robust checks
            const isAwardsHeader = (lowerLine.includes('honors') && (lowerLine.includes('awards') || lowerLine.includes('award') || lowerLine.includes('honors-awards') || lowerLine.includes('honors-'))) || lowerLine === 'awards' || lowerLine === 'honors-awards' || lowerLine === 'honors &amp; awards' || lowerLine === 'honors & awards';
            const isIgnoredSidebar = lowerLine === 'languages' || lowerLine === 'certifications' || lowerLine === 'organizations' || lowerLine === 'projects' || lowerLine === 'publications' || lowerLine.includes('certifications') || lowerLine.includes('languages') || lowerLine.includes('education');
            const isContactHeader = lowerLine === 'contact' || lowerLine === 'contact info' || lowerLine === 'personal info' || lowerLine === 'personal details';

            if (isContactHeader) {
                currentSection = 'contact';
                result.log.push(`Detected Section: 'Contact' on line ${i}`);
                continue;
            } else if (lowerLine === 'about' || lowerLine === 'summary' || lowerLine === 'profile' || lowerLine === 'professional summary') {
                currentSection = 'about';
                result.log.push(`Detected Section: 'About' on line ${i}`);
                continue;
            } else if (lowerLine === 'experience' || lowerLine === 'work history' || lowerLine === 'employment history') {
                currentSection = 'experience';
                result.log.push(`Detected Section: 'Experience' on line ${i}`);
                continue;
            } else if (lowerLine === 'skills' || lowerLine === 'skills & endorsements' || lowerLine === 'top skills' || lowerLine.includes('top skills') || lowerLine === 'skills &amp; endorsements') {
                currentSection = 'skills';
                result.log.push(`Detected Section: 'Skills' on line ${i}`);
                continue;
            } else if (lowerLine === 'endorsements' || lowerLine === 'recommendations') {
                currentSection = 'endorsements';
                result.log.push(`Detected Section: 'Endorsements' on line ${i}`);
                continue;
            } else if (lowerLine === 'activity' || lowerLine === 'articles & activity' || lowerLine === 'posts' || lowerLine === 'publications') {
                currentSection = 'posts';
                result.log.push(`Detected Section: 'Posts/Activity' on line ${i}`);
                continue;
            } else if (isAwardsHeader) {
                currentSection = 'awards';
                result.log.push(`Detected Section: 'Honors & Awards' on line ${i}`);
                continue;
            } else if (isIgnoredSidebar) {
                currentSection = 'ignored_sidebar_sections';
                result.log.push(`Closing sidebar parse target: encountered '${line}' on line ${i}`);
                continue;
            }

            // Route parsing
            if (currentSection === 'headline_about') {
                // Before encountering headers, first 5 substantial lines are headline
                if (headlineText.length < 5) {
                    headlineText.push(line);
                } else {
                    aboutText.push(line);
                }
            } else if (currentSection === 'about') {
                aboutText.push(line);
            } else if (currentSection === 'experience') {
                experienceText.push(line);
                // Also scan for portfolio-like links in experiences
                const urlMatches = line.match(/https?:\/\/[^\s]+/g);
                if (urlMatches) {
                    urlMatches.forEach(url => {
                        if (!linksFound.includes(url)) linksFound.push(url);
                    });
                }
            } else if (currentSection === 'skills') {
                // Skills usually listed one per line, or comma separated
                if (line.includes(',')) {
                    line.split(',').forEach(s => skillsFound.push(s.trim()));
                } else if (line.length < 40) {
                    // filter out dates or subheadings
                    if (!lowerLine.includes('endorsement') && !lowerLine.includes('shared') && !/\d+/.test(line)) {
                        skillsFound.push(line);
                    }
                }
            } else if (currentSection === 'endorsements') {
                // endorsement lines containing numbers
                const match = line.match(/(\d+)/);
                if (match) {
                    endorsementsCount += parseInt(match[0]);
                }
            } else if (currentSection === 'contact') {
                // Scan for contact links
                const urlMatches = line.match(/https?:\/\/[^\s]+/g);
                if (urlMatches) {
                    urlMatches.forEach(url => {
                        if (!linksFound.includes(url)) linksFound.push(url);
                    });
                }
            } else if (currentSection === 'awards') {
                // Ignore lines containing only dates/years or date ranges, but preserve lines containing the award name itself
                const isJustYearOrDate = /^\s*\d{4}\s*$/.test(line) || /^\s*[a-zA-Z]+,?\s+\d{4}\s*$/.test(line) || /^\s*\d{4}\s*-\s*\d{4}\s*$/.test(line) || /^\s*[a-zA-Z]+\s+\d{4}\s*-\s*[a-zA-Z]+\s+\d{4}\s*$/.test(line);
                if (!lowerLine.includes('page') && !isJustYearOrDate && line.length > 2) {
                    awardsText.push(line);
                }
            } else if (currentSection === 'posts') {
                postsText.push(line);
            }

            // Global scan for HTTP links for portfolio
            const urlMatches = line.match(/https?:\/\/[^\s]+/g);
            if (urlMatches) {
                urlMatches.forEach(url => {
                    if (!linksFound.includes(url)) linksFound.push(url);
                });
            }
        }

        // Final assembly
        result.ha = (headlineText.join('\n') + '\n\n' + aboutText.join('\n')).trim();
        result.skills = skillsFound.filter(s => s.length > 2).slice(0, 40).join(', ');
        
        let awardsJoined = awardsText.filter(s => s.length > 2).slice(0, 8).join(', ');
        result.ends = (endorsementsCount > 0 ? `${endorsementsCount} skill endorsements registered.` : '') + 
                      (awardsJoined ? ` Honors & Awards: ${awardsJoined}.` : '');
        if (!result.ends && experienceText.length > 0) {
            result.ends = experienceText.join('\n').substring(0, 300);
        }

        result.port = linksFound.join(', ');
        result.arts = postsText.slice(0, 10).join('\n');

        result.log.push(`Extraction Summary: Headline/About (${result.ha.length} chars), Skills (${skillsFound.length} items found), Awards (${awardsText.length} items found), Links (${linksFound.length} URLs extracted).`);

        return result;
    }

    // --- SECTION 2: IDENTITY NARRATIVE ANALYSIS ---
    analyzeIdentity(text) {
        let score = 0;
        let analysis = [];
        let edits = [];

        if (!text || text.trim() === '') {
            return {
                score: 0,
                analysis: "Your Identity section is completely blank. This is the most critical part of your profile.",
                edits: ["Write a 3-4 paragraph summary focusing on your value proposition, technical expertise, and vision for the future."]
            };
        }

        const lowerText = text.toLowerCase();

        // 1. Length Check
        if (text.length > 600) {
            score += 40;
            analysis.push("Your Headline and About section demonstrate a strong structural foundation with adequate length. In the digital economy, having a comprehensive summary is critical because it acts as your primary sales letter. The length allows the LinkedIn algorithm to parse multiple semantic relationships, increasing your surface area for discovery.");
        } else if (text.length > 300) {
            score += 20;
            analysis.push("Your About section is of average length. While it covers the basics, in the modern digital landscape, your About section is your primary sales page. Expanding it will give the algorithm more semantic data.");
            edits.push("Expand your About section to at least 3-4 paragraphs. Add a specific 'Vision' or 'Philosophy' section detailing how you view the future of your industry.");
        } else {
            score += 10;
            analysis.push("Your Headline and About section are currently too brief to make a lasting impact. You must expand this significantly to give human readers a deeper understanding of your narrative.");
            edits.push("Your summary is too short. Aim for a minimum of 100 words. Describe not just what you do, but *how* and *why* you do it.");
        }

        // 2. Keyword Check
        let foundKeywords = this.dictionaries.futuristKeywords.filter(kw => new RegExp('\\b' + kw + '\\b', 'i').test(text));
        if (foundKeywords.length >= 2) {
            score += 30;
            analysis.push(`You are successfully utilizing high-leverage, futuristic keywords (e.g., ${foundKeywords.join(', ')}). This linguistic alignment positions you as a forward-thinking architect, essential for commanding premium rates.`);
        } else {
            score += 10;
            analysis.push("Your profile currently lacks high-leverage, futuristic keywords. Without these, you risk being categorized alongside legacy professionals.");
            edits.push(`Inject futuristic terminology into your summary. Consider adding terms like: ${this.dictionaries.futuristKeywords.slice(0, 5).join(', ')} (if applicable).`);
        }

        // 3. Verb Analysis
        let foundPassive = this.dictionaries.passiveVerbs.filter(verb => lowerText.includes(verb));
        let foundActive = this.dictionaries.highImpactVerbs.filter(verb => lowerText.includes(verb));

        if (foundPassive.length > 0) {
            score += 10;
            analysis.push(`Your narrative is weakened by passive, legacy verbs like "${foundPassive[0]}". This subtle psychological framing positions you as an employee rather than a high-impact creator and leader.`);
            foundPassive.forEach(verb => {
                edits.push(`Replace the weak phrase "${verb}" with a strong action verb like "Architected", "Spearheaded", or "Scaled".`);
            });
        } else if (foundActive.length > 0) {
            score += 30;
            analysis.push(`You have excellent action-oriented vocabulary (e.g., ${foundActive.join(', ')}). This shifts the focus from passive responsibilities to active, measurable outcomes—exactly what elite headhunters look for.`);
        } else {
            score += 20;
            analysis.push("Your verb usage is neutral. While not actively harmful, you are missing an opportunity to frame your experience with power and authority.");
            edits.push("Audit your achievements and ensure every bullet point or sentence begins with a high-impact action verb (e.g., Engineered, Delivered, Optimized).");
        }

        // 4. CTA Check
        if (!lowerText.includes('contact') && !lowerText.includes('reach out') && !lowerText.includes('newsletter') && !lowerText.includes('substack') && !lowerText.includes('http')) {
            edits.push("Add a Call To Action (CTA) at the end of your About section. Tell the reader exactly what to do next (e.g., 'Subscribe to my Substack at [Link]', or 'DM me to discuss AI architecture').");
        }

        return { score: Math.min(score, 100), analysis: analysis.join(" "), edits: edits };
    }

    // --- SECTION 3: HEADLINE & BIO GENERATION (Expanded to 8 Options) ---
    generateHeadlineOptions(headline, about, skillsText) {
        const skills = skillsText ? skillsText.split(',').map(s => s.trim()) : [];
        const mainSkill = skills[0] || 'Modern Technologies';
        const secondSkill = skills[1] || 'Digital Innovation';
        const thirdSkill = skills[2] || 'System Scaling';

        // Extract a potential role keyword or fallback
        let targetRole = "Expert Architect";
        if (headline) {
            if (headline.toLowerCase().includes('engineer')) targetRole = "AI & Product Engineer";
            else if (headline.toLowerCase().includes('product')) targetRole = "Product Leader";
            else if (headline.toLowerCase().includes('consultant')) targetRole = "Strategy Consultant";
            else if (headline.toLowerCase().includes('manager')) targetRole = "Product Lead";
            else if (headline.toLowerCase().includes('founder')) targetRole = "Tech Founder & Builder";
        }

        return [
            {
                style: "The Outcomes & ROI Authority",
                description: "Focuses on metrics and financial impact to command executive attention.",
                headline: `${targetRole} | Specializing in ${mainSkill} & ${secondSkill} | Scaling Products 10x with Measurable Tech ROI`,
                bio: `I translate complex technology stacks into direct, bottom-line business outcomes. Throughout my career, I have specialized in leveraging ${mainSkill} and ${secondSkill} to replace legacy, inefficient frameworks with high-throughput assets that drive measurable corporate performance.\n\n🛠️ **Strategic Engineering Philosophy:** I view software systems not merely as cost centers, but as critical revenue engines. My primary goal is to ensure every line of code deployed directly optimizes a business metric, lowers operational latency, or unlocks new market value.\n\n⚡ **Core Value Focus:** System Optimization • Capital Efficiency • Strategic Technology Delivery.\n\n📩 **Reach Out:** DM me to schedule an executive technology audit, scale your architecture, or discuss fractional advisory roles.`
            },
            {
                style: "The Futuristic Architect",
                description: "Positions you at the bleeding edge of market trends (AI, automation, systems foresight).",
                headline: `${targetRole} | Designing the Future of ${mainSkill} | Generative AI & Systems Engineering Pioneer`,
                bio: `The future belongs to the organizations and builders who can orchestrate autonomous cognitive networks. I design, deploy, and scale intelligent agentic infrastructures that utilize ${mainSkill} to make static, legacy architectures completely obsolete.\n\n🚀 **Forward-Looking Vision:** Moving beyond simple monolithic integrations to resilient, self-healing, and self-optimizing platforms. I specialize in designing corporate technology blueprints that remain robust in the face of continuous digital disruption.\n\n🌐 **Foresight Focus:** Next-Gen Agentic Workflows • Semantic Databases • Distributed Intelligence.\n\n📩 **Partnership:** I am currently booking selected strategy consultation slots for Q3/Q4. Send a message to secure an exploratory session.`
            },
            {
                style: "The Technical Stack Craftsman",
                description: "Highlights technical credentials, frameworks, and architecture craftsmanship.",
                headline: `Senior ${targetRole} | Stack: ${mainSkill}, ${secondSkill}, ${thirdSkill} | Systems Architect & Builder`,
                bio: `I engineer high-concurrency, low-latency software solutions with absolute precision. Specializing in ${mainSkill}, ${secondSkill}, and ${thirdSkill}, I construct modular codebases and secure database schemas that maintain extreme reliability under heavy production loads.\n\n🛠️ **Primary Stack Depth:**\n• **Core Languages & Tooling:** ${mainSkill}, ${secondSkill}\n• **Systems Engineering:** ${thirdSkill}, Distributed Caching, High-Availability Clusters\n• **Methodology:** Strict Test-Driven Development (TDD), zero-trust security audits, and continuous release automation.\n\n🤝 **Collaboration:** Reach out to discuss deep-tech engineering partnerships, backend performance tuning, or core system upgrades.`
            },
            {
                style: "The Value-Proposition Hero",
                description: "Direct, problem-solving narrative ideal for founders, creators, and freelancers.",
                headline: `I help scale-ups build elite ${mainSkill} infrastructure | ${targetRole} & Technology Generalist`,
                bio: `90% of early-stage scale-ups fail due to premature scaling, unchecked technical debt, and architectural bottlenecks. I partner closely with founders and technology stakeholders to audit, optimize, and engineer high-performance systems from 0 to 1, maintaining rapid release velocity.\n\n🎯 **How I Eliminate Friction:**\n1. **Foresight Audits:** Spotting critical database and compilation bottlenecks before they impact user retention.\n2. **Team Acceleration:** Establishing clear, modular system boundaries that enable developers to push code independently without breaking production.\n\n🔗 **Resources:** Grab my free technology scaling playbook below, or DM me directly to discuss your build timeline.`
            },
            {
                style: "The Enterprise Strategic Advisor",
                description: "Designed for management consultants and strategic enterprise leaders.",
                headline: `Enterprise ${targetRole} | Digital Transformation & Systems Integration | B2B Strategic Advisor`,
                bio: `I guide Fortune 500 executive teams through highly complex technology migrations, multi-cloud governance, and digital transformation lifecycles. By architecting unified enterprise systems, I bridge the gap between deep technical implementation and board-room business priorities.\n\n💎 **Specialization Areas:**\n• **Risk Management:** Mitigating architectural friction and structural debt in multi-million dollar legacy migrations.\n• **Corporate Governance:** Designing cloud infrastructures that align with strict global compliance standards (GDPR, SOC 2, HIPAA).\n\n📩 **Consultations:** DM me to book a customized discovery workshop or request a strategic capability review.`
            },
            {
                style: "The Collaborative Agile Facilitator",
                description: "Highlights team delivery orchestration, Scrum values, and operational velocity.",
                headline: `Lead ${targetRole} | Scaling Engineering Velocity via Scrum & Agile | Facilitating High-Performance Teams`,
                bio: `I build, coach, and lead self-organizing product engineering teams that deliver business value continuously. By removing operational blockages, establishing tight Agile feedback loops, and cultivating high-trust developer cultures, I help teams double their delivery velocity while improving quality.\n\n⚡ **Core Value Focus:**\n• **Empowered People:** Placing developer enablement and collaborative communication above rigid administrative tools.\n• **Continuous Execution:** Transforming high-level roadmaps into automated continuous integration and delivery pipelines.\n\n💬 **Engagement:** Open to professional Agile training sessions, team maturity assessments, and organizational process audits.`
            },
            {
                style: "The User Journey & Design Visionary",
                description: "Perfect for UX/UI designers, product creators, and visual specialists.",
                headline: `Digital Product ${targetRole} | UX/UI Specialist | Crafting Intuitive Design Systems & SaaS User Journeys`,
                bio: `User interfaces represent the primary digital gateways through which modern businesses interact with customers. I combine high-fidelity visual design with rigorous user research to engineer responsive SaaS workflows that minimize user friction and maximize long-term product retention.\n\n🎨 **Focus Areas:**\n• **Design Strategy:** Constructing unified, accessible Figma design systems that streamline engineer-to-designer handoffs.\n• **Validation Loops:** Running systematic user discovery, heuristics audits, and interactive prototyping.\n\n🔗 **Portfolio:** Click the featured links below to view detailed visual case studies, wireframe flows, and product designs.`
            },
            {
                style: "The Multi-Disciplinary Hybrid Leader",
                description: "Leverages a diverse background in both strategy and engineering.",
                headline: `Hybrid ${targetRole} | Bridging the Gap between Engineering Depth & Strategic Business Growth`,
                bio: `I operate at the intersection of business strategy and high-fidelity systems engineering. Armed with a diverse toolkit spanning ${mainSkill}, system design, and B2B growth marketing, I orchestrate multi-disciplinary initiatives that require both deep technical architecture and market positioning foresight.\n\n🎯 **My Core Advantage:** The ability to write code alongside senior systems engineers while presenting clear, value-focused strategic opportunities to C-suite executives and venture boards.\n\n🤝 **Reach Out:** For fraction CTO placements, technology strategy advisory, and high-impact product leadership engagements.`
            }
        ];
    }

    // --- SECTION 4: SKILL ARCHITECTURE ---
    analyzeSkills(text) {
        let score = 0;
        let analysis = [];
        let edits = [];

        if (!text || text.trim() === '') {
            return {
                score: 0,
                analysis: "Your skill section is critically empty. This acts as the primary keyword repository for LinkedIn's backend matching system.",
                edits: ["Brainstorm and add at least 15-20 highly relevant technical, strategic, and industry-specific tools immediately."]
            };
        }

        const skills = text.split(',').map(s => s.trim()).filter(s => s.length > 0);
        const count = skills.length;

        if (count >= 20) {
            score = 100;
            analysis.push("You have listed a robust array of skills, which provides excellent data density for the LinkedIn search algorithm. This is vital for appearing in specialized, niche searches.");
        } else if (count >= 10) {
            score = 70;
            analysis.push("You have a foundational list of skills, but there is significant room for expansion. By only listing a handful of skills, you are leaving massive algorithmic visibility on the table.");
            edits.push(`You have ${count} skills listed. Expand this list to at least 25-30 highly relevant tags to maximize your search appearances.`);
        } else {
            score = 30;
            analysis.push("Your skill section is critically under-utilized. A sparse skills matrix renders your profile nearly invisible to recruiter boolean searches.");
            edits.push(`You only have ${count} skills listed. You must aggressively expand this to include specific technical frameworks, soft skills, and strategic methodologies.`);
        }

        // Dictionary checks
        let foundBasic = skills.filter(skill => this.dictionaries.basicSkills.some(basic => skill.toLowerCase().includes(basic.toLowerCase())));
        if (foundBasic.length > 0) {
            score = Math.max(score - 10, 0);
            analysis.push(`You are listing baseline, legacy skills that dilute your premium positioning.`);
            foundBasic.forEach(skill => {
                edits.push(`Remove the legacy skill "${skill}". Baseline proficiencies are assumed for senior roles; listing them lowers your perceived status.`);
            });
        }

        let foundFuturistic = skills.filter(skill => this.dictionaries.futuristKeywords.some(fut => skill.toLowerCase().includes(fut.toLowerCase())));
        if (foundFuturistic.length === 0) {
            edits.push("Your skills list lacks 'Tier-1' future-proof tags. Add highly specific, modern competencies like 'LLM Fine-Tuning', 'AI Strategy', or 'Distributed Systems'.");
        } else {
            edits.push(`Ensure your top 3 pinned skills include your highest-value competencies like "${foundFuturistic[0]}" rather than generic management tags.`);
        }

        return { score, analysis: analysis.join(" "), edits };
    }

    // --- SECTION 5: SOCIAL PROOF ENGINE ---
    analyzeSocialProof(text) {
        let score = 10;
        let analysis = "";
        let edits = [];

        if (!text || text.trim() === '') {
            analysis = "Social proof is the currency of the digital economy, and your profile currently shows zero registered endorsements or recommendations. When high-ticket clients view a profile devoid of peer validation, psychological friction is introduced.";
            edits.push("Identify 5 former managers or high-status colleagues and write them a thoughtful recommendation today. This leverages reciprocity, prompting them to return the favor.");
            return { score, analysis, edits };
        }

        const lowerText = text.toLowerCase();
        let awardsBonus = 0;
        let hasAwards = false;
        
        if (lowerText.includes('honors & awards:')) {
            hasAwards = true;
            awardsBonus = 35; // Significant boost for winning structured awards!
        }

        const matches = text.match(/\d+/g) || [];
        const total = matches.reduce((a, b) => a + parseInt(b), 0);
        score = Math.min((total * 2 || 40) + awardsBonus, 100);

        if (score >= 80) {
            analysis = `Your social proof engine is operating at a high level.${hasAwards ? ' Having validated Honors & Awards positions you in the top tier of authority.' : ''} With peer validations, you have established a strong baseline. This lowers the barrier for trust.`;
            edits.push("Transition your focus from sheer quantity of skill endorsements to high-quality, written narrative recommendations.");
            edits.push("Ask your recommenders to specifically highlight your strategic vision and technical execution, rather than generic 'good to work with' platitudes.");
        } else if (score >= 40) {
            analysis = `You have a moderate level of social proof${hasAwards ? ' bolstered by recognized industry Honors & Awards' : ''}, but it is not yet sufficient to establish top-tier authority. Social proof operates on a power law; the more you have, the faster you acquire more.`;
            edits.push("Systematize your social proof engine. Spend 15 minutes every Friday endorsing the skills of 5 network connections.");
            edits.push("Target your requests: Ask colleagues to endorse your most 'futuristic' skills, not just the generic ones at the bottom of the list.");
        } else {
            analysis = "Your social proof is currently too low to establish market authority. You must immediately execute an endorsement strategy to validate your claims.";
            edits.push("Send this exact message to 10 colleagues: 'Hey [Name], I'm updating my LinkedIn and trying to highlight my skills in [Skill]. Would you be open to endorsing me for that? Happy to endorse you for [Their Skill] in return!'");
        }

        return { score, analysis, edits };
    }

    // --- SECTION 6: PROOF OF WORK PORTFOLIO ---
    analyzePortfolio(text) {
        let score = 20;
        let analysis = "";
        let edits = [];

        if (!text || text.trim() === '') {
            analysis = "Your profile severely lacks external validation artifacts. A modern professional cannot rely solely on a resume; you must provide a 'Proof of Work' portfolio. Without links, you are asking visitors to take your expertise on blind faith.";
            edits.push("Urgent: Create a central hub (Notion page, personal website, Linktree) to house your case studies and projects.");
            edits.push("Add external links to your LinkedIn 'Featured' section immediately.");
            return { score, analysis, edits };
        }

        const lowerText = text.toLowerCase();
        if (lowerText.includes('http') || lowerText.includes('www') || lowerText.includes('.com')) {
            score = 100;
            analysis = "You have successfully integrated external portfolio links, which is a critical differentiator. Providing tangible proof of work instantly separates you from the noise. This proves that you are a builder and a creator.";
            
            if (!lowerText.includes('github') && !lowerText.includes('gitlab')) {
                edits.push("While you have links, adding a link to a code repository (like GitHub) significantly boosts technical credibility, even if you are mostly in strategy.");
            }
            if (!lowerText.includes('substack') && !lowerText.includes('medium') && !lowerText.includes('blog')) {
                edits.push("Consider linking to a long-form writing platform (like Substack) to prove your ability to articulate complex futurist concepts.");
            }
            edits.push("Ensure every link in your Featured section is accompanied by a compelling 1-2 sentence hook explaining the *business impact* of the project.");
        } else {
            score = 40;
            analysis = "You have mentioned portfolio items, but have not provided direct, clickable URLs. Friction kills conversion. If a recruiter has to search for your work, they won't.";
            edits.push("Convert all mentions of projects into direct `https://` links so the algorithm and human readers can easily navigate to them.");
        }

        return { score, analysis, edits };
    }

    // --- SECTION 7: THOUGHT LEADERSHIP & POST HOOK ANALYZER ---
    analyzeArticles(text) {
        let score = 20;
        let analysis = "";
        let edits = [];

        if (!text || text.trim() === '') {
            analysis = "Your profile is completely silent. You are consuming content but not creating it, meaning you are invisible to the broader network. Thought leadership is mandatory for high-level personal branding.";
            edits.push("Start a 'Hub and Spoke' content strategy. Write one deep-dive technical article per month.");
            edits.push("Leave 5 high-value, insightful comments on industry leaders' posts every single day to start generating organic impressions.");
            return { score, analysis, edits };
        }

        if (text.length > 200) {
            score = 100;
            analysis = "You are actively generating thought leadership content, which is the ultimate lever for organic growth and inbound opportunities. Your content acts as an automated networking engine, working for you 24/7.";
            edits.push("Analyze your highest-performing posts and double down on those specific formatting styles (e.g., listicles, contrarian takes).");
            edits.push("Ensure every post ends with a strong Call to Action driving readers to your proprietary ecosystem (e.g., an email capture or consulting booking link).");
        } else {
            score = 60;
            analysis = "You have some content activity, but it appears sparse. To truly dominate the algorithm, you must maintain a consistent publishing cadence. Sporadic posting will not build the required compounding momentum.";
            edits.push("Increase your publishing frequency to at least two original short-form posts per week.");
            edits.push("Vary your content formats: mix personal narratives, technical breakdowns, and contrarian industry predictions to see what resonates.");
        }

        return { score, analysis, edits };
    }

    analyzePostHook(postText) {
        if (!postText || postText.trim() === '') {
            return {
                overallScore: 0,
                hookScore: 0,
                formattingScore: 0,
                emojiScore: 0,
                ctaScore: 0,
                analysis: "Enter a post draft to evaluate metrics.",
                suggestions: []
            };
        }

        const lines = postText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        let suggestions = [];

        // 1. Hook Strength
        let hookScore = 50;
        const firstLine = lines[0] || "";
        const secondLine = lines[1] || "";
        const combinedHook = (firstLine + " " + secondLine).trim();

        if (combinedHook.length === 0) {
            hookScore = 0;
        } else {
            // Check for hooks features: stats, questions, contrast
            if (/\d+%|\d+x|\$\d+/.test(combinedHook)) {
                hookScore += 25; // Has numerical metrics
            }
            if (combinedHook.includes('?') || combinedHook.toLowerCase().includes('why') || combinedHook.toLowerCase().includes('how')) {
                hookScore += 15; // Has query hooks
            }
            if (combinedHook.length > 100) {
                hookScore -= 20; // Too verbose
                suggestions.push("Your hook line is too long. LinkedIn cut-off occurs after 140 chars. Aim for a punchy, single-sentence first line.");
            }
            if (combinedHook.length < 30) {
                hookScore -= 10;
                suggestions.push("Your hook is too short to build tension. Add a strong hook setup.");
            }
        }
        hookScore = Math.min(Math.max(hookScore, 0), 100);

        // 2. Formatting Score (Whitespace / Paragraph sizes)
        let formattingScore = 100;
        let maxParaLength = 0;
        let paragraphCount = 0;
        let currentPara = 0;

        postText.split('\n').forEach(line => {
            if (line.trim() === '') {
                if (currentPara > 0) {
                    paragraphCount++;
                    if (currentPara > maxParaLength) maxParaLength = currentPara;
                    currentPara = 0;
                }
            } else {
                currentPara += line.trim().length;
            }
        });
        if (currentPara > 0) {
            paragraphCount++;
            if (currentPara > maxParaLength) maxParaLength = currentPara;
        }

        if (maxParaLength > 250) {
            formattingScore -= 40;
            suggestions.push("Warning: You have 'walls of text' (paragraphs longer than 250 characters). Break them into isolated, single-sentence assertions to enhance mobile readability.");
        }
        if (paragraphCount < 3 && postText.length > 200) {
            formattingScore -= 30;
            suggestions.push("Increase line-breaks. LinkedIn readers skim. Add a line break after nearly every assertion.");
        }
        formattingScore = Math.min(Math.max(formattingScore, 0), 100);

        // 3. Emoji Score (Density)
        let emojiScore = 80;
        const emojiReg = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji_Presentation}|\p{Emoji_Modifier_Base}/gu;
        const emojisFound = postText.match(emojiReg) || [];
        const words = postText.split(/\s+/).length;
        const density = emojisFound.length / words;

        if (emojisFound.length === 0) {
            emojiScore = 50;
            suggestions.push("Add visual punctuation. Adding 2-4 strategic emojis (e.g. 🎯, 🚀, 💡) as list bullet points boosts engagement.");
        } else if (density > 0.08) {
            emojiScore = 40;
            suggestions.push("Excessive Emojis! You are spamming emoticons. This triggers spam filters and dilutes executive authority. Restrict emojis to 1-2 per section.");
        } else {
            emojiScore = 100;
        }

        // 4. CTA Score
        let ctaScore = 100;
        const lowerPost = postText.toLowerCase();
        if (!lowerPost.includes('?') && !lowerPost.includes('comment') && !lowerPost.includes('agree') && !lowerPost.includes('thoughts') && !lowerPost.includes('link') && !lowerPost.includes('http')) {
            ctaScore = 30;
            suggestions.push("Add a concluding conversion driver. End with a provoking question (e.g. 'What's your take?') or resource driver ('Link in comments').");
        }

        const overallScore = Math.round((hookScore + formattingScore + emojiScore + ctaScore) / 4);

        let analysis = `Overall draft strength is ${overallScore}%. `;
        if (overallScore > 80) analysis += "Excellent readability and high engagement hook structure.";
        else if (overallScore > 60) analysis += "Solid structure, but minor adjustments to hook or line breaks will significantly raise conversion.";
        else analysis += "Low impact. It risks being scrolled past or ignored due to formatting friction and legacy hooks.";

        return {
            overallScore,
            hookScore,
            formattingScore,
            emojiScore,
            ctaScore,
            analysis,
            suggestions
        };
    }

    improvePost(postText) {
        if (!postText || postText.trim() === '') return '';

        // Heuristic Post Refactoring
        let lines = postText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        if (lines.length === 0) return '';

        let improved = [];
        
        // 1. Check Hook Line
        let primaryHook = lines[0];
        if (primaryHook.length > 100) {
            // Cut or generate a punchier starter
            improved.push("🚀 Here is a perspective most builders miss:");
            improved.push("");
            improved.push(primaryHook);
        } else {
            // Enhance the current hook
            if (!primaryHook.startsWith('💡') && !primaryHook.startsWith('🔥') && !primaryHook.startsWith('🎯') && !primaryHook.startsWith('🚀')) {
                improved.push("💡 " + primaryHook);
            } else {
                improved.push(primaryHook);
            }
        }
        improved.push(""); // empty space

        // 2. Process remaining lines, breaking heavy texts
        for (let i = 1; i < lines.length; i++) {
            let line = lines[i];

            // If it's a huge line, split it by sentences
            if (line.length > 150 && !line.includes('http')) {
                let sentences = line.match(/[^.!?]+[.!?]+(\s|$)/g) || [line];
                sentences.forEach(s => {
                    if (s.trim().length > 5) {
                        improved.push(s.trim());
                        improved.push(""); // Spacing out sentences
                    }
                });
            } else {
                // If it looks like a list item, give it a beautiful emoji bullet
                if (line.startsWith('-') || line.startsWith('*') || /^\d+\./.test(line)) {
                    let cleaned = line.replace(/^[-*\d.]+\s*/, '');
                    const bullets = ['▸', '⚡', '✔', '💎', '▹'];
                    const chosen = bullets[(i % bullets.length)];
                    improved.push(`${chosen} ${cleaned}`);
                } else {
                    improved.push(line);
                    improved.push("");
                }
            }
        }

        // 3. Add high impact CTA if absent
        const textLower = postText.toLowerCase();
        if (!textLower.includes('?') && !textLower.includes('comment') && !textLower.includes('thoughts')) {
            if (improved[improved.length - 1] !== "") improved.push("");
            improved.push("💬 Agree or disagree? Drop your thoughts below.");
        }

        // Clean up double empty rows
        let cleanResult = [];
        let wasEmpty = false;
        improved.forEach(l => {
            if (l === "") {
                if (!wasEmpty) {
                    cleanResult.push("");
                    wasEmpty = true;
                }
            } else {
                cleanResult.push(l);
                wasEmpty = false;
            }
        });

        return cleanResult.join('\n');
    }

    // --- SECTION 8: TARGET CAREER ROLE GAP ANALYSIS ---
    runGapAnalysis(skillsText, targetRoleKey) {
        const role = this.dictionaries.roles[targetRoleKey];
        if (!role) {
            return {
                score: 0,
                roleTitle: "Unknown Role",
                matching: [],
                missing: [],
                legacyToPrune: [],
                description: ""
            };
        }

        const skills = skillsText ? skillsText.split(',').map(s => s.trim().toLowerCase()).filter(s => s.length > 0) : [];
        
        let matching = [];
        let missing = [];
        let legacyToPrune = [];

        // Check required skills
        role.required.forEach(req => {
            const reqLower = req.toLowerCase();
            const found = skills.some(skill => skill.includes(reqLower) || reqLower.includes(skill));
            if (found) {
                matching.push(req);
            } else {
                missing.push(req);
            }
        });

        // Check legacy dilution skills
        role.legacy.forEach(leg => {
            const legLower = leg.toLowerCase();
            const found = skills.some(skill => skill.includes(legLower));
            if (found) {
                legacyToPrune.push(leg);
            }
        });

        const totalReq = role.required.length;
        const matchesCount = matching.length;
        // score scale: percentage of required skills matched (capped at 100)
        let score = Math.round((matchesCount / Math.max(totalReq, 1)) * 100);

        // Adjust score down slightly if legacy skills dilution exists
        if (legacyToPrune.length > 0) {
            score = Math.max(score - (legacyToPrune.length * 8), 10);
        }

        return {
            score,
            roleTitle: role.title,
            matching,
            missing,
            legacyToPrune,
            description: role.marketDescription
        };
    }

    // Custom function to get role-specific optimization roadmap checklists
    getRoleSpecificChecklist(targetRoleKey) {
        const role = this.dictionaries.roles[targetRoleKey];
        if (!role) return [];

        const items = [];
        
        // If database loaded custom tasks, prioritize them!
        if (role.customChecklist && role.customChecklist.length > 0) {
            role.customChecklist.forEach(task => {
                items.push({
                    dimension: `Career Track: ${role.title}`,
                    text: task.text,
                    weight: task.weight
                });
            });
            return items;
        }

        // 1. Technical, Security & Infrastructure Categories
        if (targetRoleKey.includes('engineer') || targetRoleKey.includes('dev') || targetRoleKey.includes('architect') || targetRoleKey === 'dba' || targetRoleKey.includes('admin') || targetRoleKey === 'penetration_tester') {
            items.push({
                dimension: `Career Track: ${role.title}`,
                text: `Pin your high-leverage technical skills (e.g. ${role.required.slice(0, 3).join(', ')}) to the very top of your profile skill matrix to optimize recruiter boolean matchings.`,
                weight: 12
            });
            items.push({
                dimension: `Career Track: ${role.title}`,
                text: `Prune legacy styling tags and basic office tools (e.g. ${role.legacy.slice(0, 3).join(', ')}) that dilute your senior technical authority.`,
                weight: 10
            });
            items.push({
                dimension: `Career Track: ${role.title}`,
                text: "Draft a specific case study block illustrating scaling throughput, high availability setups, or code-driven automation pipelines.",
                weight: 15
            });
        } 
        // 2. Executive Leadership & Agile Strategy Categories
        else if (targetRoleKey === 'cto' || targetRoleKey === 'ciso' || targetRoleKey === 'vpe' || targetRoleKey.includes('chief') || targetRoleKey.includes('director') || targetRoleKey.includes('leader') || targetRoleKey.includes('manager') || targetRoleKey.includes('coach') || targetRoleKey === 'scrum_master' || targetRoleKey.includes('program')) {
            items.push({
                dimension: `Career Track: ${role.title}`,
                text: `Reframe your About summary from writing basic line-by-line code to establishing organizational scalability, executive strategies, and budget efficiencies (required competencies: ${role.required.slice(0, 3).join(', ')}).`,
                weight: 15
            });
            items.push({
                dimension: `Career Track: ${role.title}`,
                text: `Remove administrative baseline tags (e.g. ${role.legacy.slice(0, 3).join(', ')}) from your skills to raise your perceived professional status.`,
                weight: 8
            });
            items.push({
                dimension: `Career Track: ${role.title}`,
                text: "Add structural achievements showing developer team onboarding velocities, legacy risk mitigations, or agile scrum transformation metrics.",
                weight: 12
            });
        } 
        // 3. Analytics, Business Systems & Finance
        else if (targetRoleKey.includes('analyst') || targetRoleKey.includes('risk') || targetRoleKey.includes('writer')) {
            items.push({
                dimension: `Career Track: ${role.title}`,
                text: `Highlight data pipeline modeling, documentation schemas, or enterprise risk forecasts (e.g. ${role.required.slice(0, 3).join(', ')}).`,
                weight: 14
            });
            items.push({
                dimension: `Career Track: ${role.title}`,
                text: `Prune simple spreadsheets or logging tools (e.g. ${role.legacy.slice(0, 3).join(', ')}) to reflect high-value analysis competence.`,
                weight: 10
            });
        }
        // 4. Marketing, Sales & Operations Default
        else {
            items.push({
                dimension: `Career Track: ${role.title}`,
                text: `Showcase consumer insights, deal structuring, conversion growth metrics, or brand strategy keywords (e.g. ${role.required.slice(0, 3).join(', ')}).`,
                weight: 12
            });
            items.push({
                dimension: `Career Track: ${role.title}`,
                text: `Prune low-impact visual posting and cold outreach tags (e.g. ${role.legacy.slice(0, 3).join(', ')}) to position yourself as an authority.`,
                weight: 8
            });
        }

        return items;
    }

    // Dynamic Roles Database plain-text loader & state-machine parser
    async loadRolesDatabase() {
        try {
            const response = await fetch('roles_db.txt');
            if (!response.ok) {
                console.warn("Roles database fetch failed, using embedded dictionary.");
                return;
            }
            const text = await response.text();
            const parsedRoles = this.parseRolesDatabaseText(text);
            if (Object.keys(parsedRoles).length > 0) {
                // Copy parsed properties onto existing roles, but preserve custom keys
                Object.keys(parsedRoles).forEach(key => {
                    if (this.dictionaries.roles[key]) {
                        this.dictionaries.roles[key] = {
                            ...this.dictionaries.roles[key],
                            ...parsedRoles[key]
                        };
                    } else {
                        this.dictionaries.roles[key] = parsedRoles[key];
                    }
                });
                console.log(`Successfully loaded & merged ${Object.keys(parsedRoles).length} roles from roles_db.txt database!`);
            }
        } catch (err) {
            console.warn("Could not load roles_db.txt dynamically (CORS or server offline). Falling back safely to embedded dictionary.", err);
        }
    }

    parseRolesDatabaseText(text) {
        const roles = {};
        const lines = text.split('\n');
        let currentRoleKey = null;
        let currentRole = null;
        let parsingTasks = false;

        for (let line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;

            if (trimmed.startsWith('# ROLE_START:')) {
                currentRoleKey = trimmed.replace('# ROLE_START:', '').trim();
                currentRole = {
                    title: "",
                    required: [],
                    legacy: [],
                    marketDescription: "",
                    customChecklist: []
                };
                parsingTasks = false;
            } else if (trimmed === '# ROLE_END') {
                if (currentRoleKey && currentRole) {
                    roles[currentRoleKey] = currentRole;
                }
                currentRoleKey = null;
                currentRole = null;
                parsingTasks = false;
            } else if (currentRole) {
                if (trimmed.startsWith('## TITLE:')) {
                    currentRole.title = trimmed.replace('## TITLE:', '').trim();
                } else if (trimmed.startsWith('## MARKET_DESCRIPTION:')) {
                    currentRole.marketDescription = trimmed.replace('## MARKET_DESCRIPTION:', '').trim();
                } else if (trimmed.startsWith('## REQUIRED_SKILLS:')) {
                    const skillsStr = trimmed.replace('## REQUIRED_SKILLS:', '').trim();
                    currentRole.required = skillsStr.split(',').map(s => s.trim()).filter(s => s.length > 0);
                } else if (trimmed.startsWith('## LEGACY_SKILLS:')) {
                    const legacyStr = trimmed.replace('## LEGACY_SKILLS:', '').trim();
                    currentRole.legacy = legacyStr.split(',').map(s => s.trim()).filter(s => s.length > 0);
                } else if (trimmed.startsWith('## ROADMAP_TASKS:')) {
                    parsingTasks = true;
                } else if (parsingTasks && trimmed.startsWith('- Task:')) {
                    const taskPart = trimmed.replace('- Task:', '').trim();
                    const parts = taskPart.split('|');
                    const textVal = parts[0] ? parts[0].trim() : "";
                    const weightVal = parts[1] ? parseInt(parts[1].replace('Weight:', '').trim()) : 10;
                    if (textVal) {
                        currentRole.customChecklist.push({
                            text: textVal,
                            weight: weightVal
                        });
                    }
                }
            }
        }
        return roles;
    }

    // Main diagnostic runner
    runDiagnostic(data) {
        return [
            { name: "Identity & Narrative", data: this.analyzeIdentity(data.ha) },
            { name: "Skill Architecture", data: this.analyzeSkills(data.skills) },
            { name: "Social Proof Engine", data: this.analyzeSocialProof(data.ends) },
            { name: "Proof of Work (Portfolio)", data: this.analyzePortfolio(data.port) },
            { name: "Thought Leadership", data: this.analyzeArticles(data.arts) }
        ];
    }
}

// Bind globally
window.LinkedInExpertSystem = LinkedInExpertSystem;
