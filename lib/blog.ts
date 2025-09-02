export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  readTime: number
  category: string
  tags: string[]
  image: string
  featured: boolean
}

export const blogCategories = [
  { id: "all", name: "All Posts" },
  { id: "industry-insights", name: "Industry Insights" },
  { id: "technology", name: "Technology" },
  { id: "sustainability", name: "Sustainability" },
  { id: "market-trends", name: "Market Trends" },
  { id: "company-news", name: "Company News" },
  { id: "safety", name: "Safety" },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-oil-refining-technology",
    title: "The Future of Oil Refining: Embracing Advanced Technology",
    excerpt: "Explore how cutting-edge technologies like AI, IoT, and advanced catalysts are revolutionizing the oil refining industry and improving efficiency.",
    content: `The Future of Oil Refining: Embracing Advanced Technology

The oil refining industry stands at the cusp of a technological revolution. As we navigate the complexities of modern energy demands and environmental responsibilities, advanced technologies are reshaping how we approach petroleum processing.

Artificial Intelligence in Refining

Artificial Intelligence (AI) is transforming refinery operations by enabling predictive maintenance, optimizing process parameters, and enhancing safety protocols. Machine learning algorithms analyze vast amounts of operational data to identify patterns and predict equipment failures before they occur.

Key Benefits of AI Implementation:
- Predictive Maintenance: Reducing unplanned downtime by up to 30%
- Process Optimization: Improving yield efficiency by 2-5%
- Safety Enhancement: Real-time monitoring and risk assessment
- Energy Efficiency: Optimizing energy consumption across operations

Internet of Things (IoT) Integration

IoT sensors throughout refinery facilities provide real-time data on temperature, pressure, flow rates, and equipment performance. This connectivity enables:

- Continuous monitoring of critical parameters
- Automated adjustments to maintain optimal conditions
- Enhanced data collection for analysis and improvement
- Remote monitoring capabilities for improved safety

Advanced Catalyst Technologies

New catalyst formulations are improving conversion rates and reducing environmental impact:

- Selective Catalysts: Higher specificity for desired products
- Regenerative Systems: Extended catalyst life and reduced waste
- Bio-based Catalysts: Sustainable alternatives for specific processes

The Road Ahead

As we continue to invest in these technologies, Eurasis Refinery remains committed to leading the industry in innovation while maintaining our focus on safety, efficiency, and environmental responsibility.

The future of oil refining is bright, powered by technology that makes operations smarter, safer, and more sustainable.`,
    publishedAt: "2025-01-15",
    readTime: 8,
    category: "technology",
    tags: ["AI", "IoT", "Innovation", "Efficiency"],
    image: "/blog/8.jpg?height=400&width=800",
    featured: true,
  },
  {
    id: "2",
    slug: "sustainable-refining-practices-2025",
    title: "Sustainable Refining Practices: Our 2025 Environmental Initiatives",
    excerpt: "Learn about Eurasis Refinery's comprehensive approach to sustainable operations and our commitment to reducing environmental impact.",
    content: `Sustainable Refining Practices: Our 2025 Environmental Initiatives

At Eurasis Refinery, sustainability isn't just a buzzword—it's a core principle that guides every aspect of our operations. This year, we've implemented several groundbreaking initiatives to reduce our environmental footprint while maintaining operational excellence.

Carbon Footprint Reduction

Our comprehensive carbon reduction strategy focuses on multiple areas:

Energy Efficiency Improvements
- Upgraded heat recovery systems reducing energy consumption by 15%
- Implementation of LED lighting throughout facilities
- Optimization of steam systems for better efficiency

Renewable Energy Integration
- Installation of 50MW solar panel array
- Wind energy partnerships for 30% renewable electricity
- Biomass integration for process heating

Waste Reduction and Recycling

We've revolutionized our approach to waste management:

- Zero Liquid Discharge: Advanced water treatment systems
- Catalyst Recycling: 95% recovery rate for spent catalysts
- Byproduct Utilization: Converting waste streams into valuable products

Air Quality Improvements

Our air quality initiatives include:

- Advanced scrubbing systems reducing emissions by 40%
- Real-time air quality monitoring
- Upgraded flare systems for cleaner combustion

Water Conservation

Water stewardship remains a priority:

- Closed-loop cooling systems
- Rainwater harvesting for non-process uses
- Advanced wastewater treatment and reuse

Looking Forward

These initiatives represent just the beginning of our sustainability journey. We're committed to achieving carbon neutrality by 2030 while continuing to provide the high-quality products our customers depend on.`,

    publishedAt: "2025-01-10",
    readTime: 6,
    category: "sustainability",
    tags: ["Environment", "Carbon Reduction", "Renewable Energy", "Sustainability"],
    image: "/blog/2.jpg?height=400&width=800",
    featured: true,
  },
  {
    id: "3",
    slug: "global-oil-market-trends-q1-2025",
    title: "Global Oil Market Trends: Q1 2025 Analysis",
    excerpt: "Our comprehensive analysis of global oil market trends, price movements, and factors influencing the energy sector in early 2025.",
    content: `Global Oil Market Trends: Q1 2025 Analysis

The first quarter of 2025 has brought significant developments in the global oil market. Our analysis team has compiled key insights into market dynamics, price trends, and factors shaping the energy landscape.

Market Overview

Q1 2025 has been characterized by:

- Crude oil prices stabilizing in the $75-85 range
- Increased demand from emerging markets
- Supply chain optimization across major producers
- Growing focus on refined product quality

Key Drivers

Geopolitical Factors
- Regional stability improvements in key producing areas
- Trade relationship developments affecting supply chains
- Policy changes impacting international energy trade

Economic Indicators
- Global GDP growth supporting energy demand
- Industrial activity increases in key markets
- Transportation sector recovery continuing

Technology Impact
- Efficiency improvements in extraction and refining
- Digital transformation reducing operational costs
- Environmental technologies influencing market preferences

Regional Analysis

North America
- Shale production maintaining steady output
- Refinery utilization rates above 90%
- Infrastructure investments supporting growth

Asia-Pacific
- Demand growth driven by economic expansion
- New refinery capacity coming online
- Increasing focus on product quality standards

Europe
- Regulatory changes affecting market dynamics
- Sustainability requirements influencing operations
- Supply diversification strategies

Outlook

Looking ahead, we anticipate:

- Continued price stability with moderate volatility
- Growing demand for high-quality refined products
- Increased focus on sustainable production methods
- Technology-driven efficiency improvements

Strategic Implications

For Eurasis Refinery, these trends reinforce our strategy of:

- Investing in advanced refining technologies
- Maintaining flexible production capabilities
- Focusing on premium product quality
- Strengthening customer relationships globally

The market environment presents opportunities for growth while emphasizing the importance of operational excellence and strategic positioning.`,

    publishedAt: "2025-01-08",
    readTime: 10,
    category: "market-trends",
    tags: ["Market Analysis", "Oil Prices", "Global Markets", "Economic Trends"],
    image: "/blog/3.jpg?height=400&width=800",
    featured: false,
  },
  {
    id: "4",
    slug: "safety-first-culture-eurasis-refinery",
    title: "Safety First: Building a Culture of Excellence at Eurasis Refinery",
    excerpt: "Discover how we maintain industry-leading safety standards through comprehensive training, advanced monitoring, and a commitment to continuous improvement.",
    content: `Safety First: Building a Culture of Excellence at Eurasis Refinery

Safety isn't just a priority at Eurasis Refinery—it's our foundation. Every decision, every process, and every innovation is guided by our unwavering commitment to protecting our employees, communities, and environment.

Our Safety Philosophy

We believe that all incidents are preventable. This philosophy drives our comprehensive approach to safety management, which includes:

- Leadership Commitment: Safety leadership from the top down
- Employee Engagement: Every team member is a safety leader
- Continuous Improvement: Regular assessment and enhancement of safety practices
- Technology Integration: Advanced systems for monitoring and prevention

Key Safety Initiatives

Advanced Monitoring Systems
- Real-time gas detection throughout facilities
- Automated emergency shutdown systems
- Predictive analytics for risk assessment
- 24/7 monitoring center operations

Training and Development
- Comprehensive safety orientation for all new employees
- Regular refresher training and skill updates
- Emergency response drills and simulations
- Leadership development in safety management

Process Safety Management
- Rigorous hazard analysis and risk assessment
- Mechanical integrity programs
- Management of change procedures
- Incident investigation and learning

Safety Performance

Our commitment to safety excellence is reflected in our performance:

- Zero Fatalities: Maintained for over 8 years
- Lost Time Incident Rate: 0.12 (industry leading)
- Near Miss Reporting: 300% increase in proactive reporting
- Safety Training Hours: 40+ hours per employee annually

Technology and Innovation

We leverage cutting-edge technology to enhance safety:

Digital Safety Systems
- IoT sensors for continuous monitoring
- AI-powered risk prediction models
- Mobile safety reporting applications
- Virtual reality training programs

Personal Protective Equipment
- Advanced respiratory protection systems
- Smart helmets with integrated communication
- Flame-resistant clothing with comfort features
- Emergency response equipment upgrades

Community and Environmental Safety

Our safety commitment extends beyond our facilities:

- Emergency Response: Coordination with local first responders
- Environmental Monitoring: Continuous air and water quality assessment
- Community Engagement: Regular safety information sharing
- Transportation Safety: Rigorous standards for product delivery

Continuous Improvement

Safety excellence requires constant vigilance and improvement:

- Regular safety audits and assessments
- Benchmarking against industry best practices
- Employee feedback and suggestion programs
- Investment in new safety technologies

Looking Ahead

As we continue to grow and evolve, our commitment to safety remains absolute. We're investing in next-generation safety technologies, expanding our training programs, and strengthening our safety culture to ensure that everyone goes home safely every day.

Safety isn't just what we do—it's who we are at Eurasis Refinery.`,
    publishedAt: "2025-01-05",
    readTime: 7,
    category: "safety",
    tags: ["Safety", "Training", "Technology", "Culture"],
    image: "/blog/4.jpg?height=400&width=800",
    featured: false,
  },
  {
    id: "5",
    slug: "eurasis-refinery-expansion-announcement",
    title: "Eurasis Refinery Announces Major Expansion Project",
    excerpt: "We're excited to announce our largest expansion project to date, which will increase capacity by 40% and create 500 new jobs.",
    content: `Eurasis Refinery Announces Major Expansion Project

We're thrilled to announce the launch of our most ambitious expansion project in company history. This $2.5 billion investment will significantly enhance our refining capacity while incorporating the latest in sustainable technology.

Project Overview

The expansion project, dubbed "Future Energy Initiative," will:

- Increase refining capacity by 40% (200,000 barrels per day)
- Add advanced processing units for premium products
- Implement state-of-the-art environmental controls
- Create 500 permanent jobs and 2,000 construction jobs

Key Components

New Processing Units
- Hydrocracking Unit: Enhanced diesel and jet fuel production
- Catalytic Reforming Unit: High-octane gasoline production
- Sulfur Recovery Unit: Advanced environmental compliance
- Hydrogen Production Unit: Supporting clean fuel initiatives

Technology Integration
- AI-powered process optimization
- Advanced automation systems
- Real-time emissions monitoring
- Digital twin technology for operations

Environmental Features
- 50% reduction in water usage per barrel processed
- Advanced air quality control systems
- Renewable energy integration (solar and wind)
- Zero liquid discharge water treatment

Economic Impact

This expansion will bring significant benefits to our community:

Job Creation
- 500 permanent positions across all skill levels
- 2,000 construction jobs over 3-year build period
- Indirect job creation in supporting industries
- Comprehensive training programs for new employees

Economic Benefits
- $150 million annual increase in local economic activity
- Enhanced tax base for community development
- Support for local suppliers and contractors
- Investment in community infrastructure

Timeline and Milestones

Phase 1 (2025): Planning and Preparation
- Final engineering and design completion
- Environmental permits and approvals
- Site preparation and infrastructure development
- Contractor selection and mobilization

Phase 2 (2026-2027): Construction
- Major equipment installation
- Utility and infrastructure construction
- Safety system implementation
- Employee recruitment and training

Phase 3 (2028): Commissioning and Startup
- System testing and optimization
- Safety and environmental compliance verification
- Production ramp-up
- Full operational capacity achievement

Sustainability Commitment

This expansion reinforces our commitment to sustainable operations:

- Carbon Neutral Goal: Achieving carbon neutrality by 2030
- Renewable Energy: 60% renewable electricity by 2028
- Circular Economy: Maximizing resource efficiency and waste reduction
- Community Partnership: Ongoing engagement and benefit sharing

Looking Forward

This expansion positions Eurasis Refinery as a leader in sustainable refining technology while meeting growing demand for high-quality petroleum products. We're excited about the opportunities this project creates for our employees, community, and customers.

The Future Energy Initiative represents more than just growth—it's our commitment to responsible energy production for generations to come.`,
    publishedAt: "2025-01-03",
    readTime: 9,
    category: "company-news",
    tags: ["Expansion", "Investment", "Jobs", "Sustainability"],
    image: "/blog/5.jpg?height=400&width=800",
    featured: true,
  },
  {
    id: "6",
    slug: "digital-transformation-refinery-operations",
    title: "Digital Transformation in Refinery Operations",
    excerpt: "How digital technologies are revolutionizing refinery operations, from predictive maintenance to automated quality control.",
    content: `Digital Transformation in Refinery Operations

The digital revolution has arrived in the refining industry, and Eurasis Refinery is at the forefront of this transformation. Our comprehensive digital strategy is reshaping how we operate, maintain, and optimize our facilities.

The Digital Imperative

Modern refineries generate enormous amounts of data—from process parameters to equipment performance metrics. The challenge isn't collecting this data; it's transforming it into actionable insights that drive operational excellence.

Key Digital Technologies

Industrial Internet of Things (IIoT)
Our facilities are equipped with thousands of sensors that continuously monitor:

- Temperature and pressure across all units
- Vibration patterns in rotating equipment
- Chemical composition in real-time
- Energy consumption patterns
- Environmental parameters

Artificial Intelligence and Machine Learning
AI algorithms analyze our operational data to:

- Predict equipment failures before they occur
- Optimize process parameters for maximum efficiency
- Identify quality issues in real-time
- Recommend maintenance schedules
- Detect anomalies and potential safety risks

Digital Twin Technology
We've created digital replicas of our entire refinery that enable:

- Virtual testing of operational changes
- Scenario planning and optimization
- Training simulations for operators
- Predictive modeling of equipment performance
- Risk assessment and mitigation planning

Operational Benefits

Predictive Maintenance
Our predictive maintenance program has achieved:

- 35% reduction in unplanned downtime
- 25% decrease in maintenance costs
- 40% improvement in equipment reliability
- Extended equipment life cycles
- Enhanced safety through proactive interventions

Process Optimization
Digital optimization has delivered:

- 3% improvement in overall yield
- 15% reduction in energy consumption
- 20% decrease in waste generation
- Improved product quality consistency
- Faster response to market demands

Quality Control
Automated quality systems provide:

- Real-time product quality monitoring
- Immediate alerts for specification deviations
- Automated adjustments to maintain quality
- Comprehensive quality documentation
- Reduced manual testing requirements

Implementation Journey

Phase 1: Foundation Building
- Infrastructure upgrades and connectivity
- Sensor deployment and data collection
- Basic analytics and reporting systems
- Employee training and change management

Phase 2: Advanced Analytics
- Machine learning model development
- Predictive maintenance implementation
- Process optimization algorithms
- Digital twin creation and validation

Phase 3: Autonomous Operations
- Automated decision-making systems
- Self-optimizing processes
- Advanced AI integration
- Continuous learning and improvement

Future Developments

Emerging Technologies
We're exploring next-generation technologies:

- Quantum computing for complex optimization
- Augmented reality for maintenance and training
- Blockchain for supply chain transparency
- 5G connectivity for enhanced data transmission

Autonomous Operations
The future of refining includes:

- Self-optimizing processes
- Autonomous maintenance systems
- AI-driven decision making
- Minimal human intervention requirements

Competitive Advantage

Digital transformation provides significant advantages:

- Operational Excellence: Improved efficiency and reliability
- Cost Reduction: Lower operating and maintenance costs
- Quality Enhancement: Consistent, high-quality products
- Safety Improvement: Proactive risk management
- Environmental Benefits: Reduced emissions and waste
- Market Responsiveness: Faster adaptation to market changes

Conclusion

Digital transformation isn't just about technology—it's about reimagining how we operate. At Eurasis Refinery, we're leveraging digital technologies to create a safer, more efficient, and more sustainable operation that benefits our employees, customers, and communities.

The future of refining is digital, and we're leading the way.`,
    publishedAt: "2025-01-01",
    readTime: 12,
    category: "technology",
    tags: ["Digital Transformation", "AI", "IoT", "Automation"],
    image: "/blog/6.jpg?height=400&width=800",
    featured: false,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "all") return blogPosts
  return blogPosts.filter((post) => post.category === category)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getRelatedPosts(currentPostId: string, category: string, limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.id !== currentPostId && post.category === category).slice(0, limit)
}