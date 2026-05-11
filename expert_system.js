// expert_system.js

class LinkedInExpertSystem {
    constructor() {
        // Define dictionaries and rules for the expert system
        this.dictionaries = {
            passiveVerbs: ['responsible for', 'duties included', 'managed', 'worked on', 'helped', 'assisted', 'handled', 'was in charge of'],
            highImpactVerbs: ['architected', 'spearheaded', 'scaled', 'delivered', 'deployed', 'engineered', 'optimized', '10x', 'transformed', 'pioneered'],
            futuristKeywords: ['AI', 'Generative AI', 'LLM', 'Machine Learning', 'Systems Architecture', 'Automation', 'Strategic Foresight', 'Digital Transformation', 'Web3', 'Quantum', 'Rust', 'Mojo'],
            basicSkills: ['Microsoft Word', 'Excel', 'PowerPoint', 'Teamwork', 'Communication', 'HTML', 'CSS', 'Data Entry']
        };
    }

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

    analyzeSocialProof(text) {
        let score = 10;
        let analysis = "";
        let edits = [];

        if (!text || text.trim() === '') {
            analysis = "Social proof is the currency of the digital economy, and your profile currently shows zero registered endorsements or recommendations. When high-ticket clients view a profile devoid of peer validation, psychological friction is introduced.";
            edits.push("Identify 5 former managers or high-status colleagues and write them a thoughtful recommendation today. This leverages reciprocity, prompting them to return the favor.");
            return { score, analysis, edits };
        }

        const matches = text.match(/\d+/g) || [];
        const total = matches.reduce((a, b) => a + parseInt(b), 0);
        score = Math.min(total * 2 || 40, 100);

        if (score >= 80) {
            analysis = `Your social proof engine is operating at a high level. With an estimated ${total} endorsements, you have established a strong baseline of peer validation. This lowers the barrier for trust.`;
            edits.push("Transition your focus from sheer quantity of skill endorsements to high-quality, written narrative recommendations.");
            edits.push("Ask your recommenders to specifically highlight your strategic vision and technical execution, rather than generic 'good to work with' platitudes.");
        } else if (score >= 40) {
            analysis = `You have a moderate level of social proof (${total} estimated), but it is not yet sufficient to establish top-tier authority. Social proof operates on a power law; the more you have, the faster you acquire more.`;
            edits.push("Systematize your social proof engine. Spend 15 minutes every Friday endorsing the skills of 5 network connections.");
            edits.push("Target your requests: Ask colleagues to endorse your most 'futuristic' skills, not just the generic ones at the bottom of the list.");
        } else {
            analysis = "Your social proof is currently too low to establish market authority. You must immediately execute an endorsement strategy to validate your claims.";
            edits.push("Send this exact message to 10 colleagues: 'Hey [Name], I'm updating my LinkedIn and trying to highlight my skills in [Skill]. Would you be open to endorsing me for that? Happy to endorse you for [Their Skill] in return!'");
        }

        return { score, analysis, edits };
    }

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

// Attach to window so it can be used globally
window.LinkedInExpertSystem = LinkedInExpertSystem;
