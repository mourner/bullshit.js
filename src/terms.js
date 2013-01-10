var bullshitTerms = [
    '(market|goal|community|quality|results|sales|user|customer' +
        '|subject|role|service|client|process|business)' +
        '.((centric(ity)?)|facing|oriented|driven|focused|assessment|service)',
    '24/7',
    'a-b testing',
    'accessib(le|ility)',
    'acquisition',
    'action items?',
    'advantages?',
    'aggregate',
    'analytics?',
    'application service providers?',
    'assets?',
    'authoritative',
    'automated',
    'b2b',
    'back to the drawing board',
    'ball.?park',
    'band.aid',
    'bandwidth',
    'benchmark',
    '(benefit|gap) analysis',
    'best.of.breed',
    'best.practice',
    'big.data',
    'big picture',
    'bottom line',
    'bottom.up',
    'brain.?storm',
    'brain.?dump',
    'brand(s?|ing|ed)',
    'burn.rates?',
    'business.(cases|plans)?',
    'buzz',
    'call to action',
    'capacity',
    'capitalize',
    'center of excellence',
    'challenges?',
    'change agent',
    'circle the wagons',
    'collaborat(e|ion)',
    'communicat(e|ion)',
    'compelling',
    'competitive( advantage)?',
    'connect the dots',
    'content management',
    'contingency plan',
    'control group',
    'convergent',
    'conversion',
    'core business',
    'core competenc(y|ies)',
    'cost-effective',
    'cost/benefit',
    'craftsmanship',
    'critical path',
    'crm',
    'cross.sell',
    'crowd.?(fund(s?|ed|ing)|sourc(ed|e|ing))',
    'cutting.edge',
    'data mining',
    'deep dive',
    'delight the customers?',
    'deliverables?',
    'demographic',
    'discovery',
    'diversity',
    'downsize',
    'drill down',
    'drink the kool-aid',
    'drop.?in',
    'drop the ball',
    'due dilligence',
    'dynamic',
    'e-?(business|commerce|tailers)',
    'ecosystems?',
    'efficien(t|cy)',
    'elaboration',
    'elephant in the room',
    'elevator pitch',
    'emerging markets',
    'empower(ment)?',
    'end of the day',
    'end to end',
    'engage',
    'enhance',
    'enterprise',
    'eta',
    'etched in stone',
    'exceed expectations',
    'expectations',
    'experiences',
    'exposure',
    'eyeballs',
    'facilitat(e|or)',
    'fast track',
    'fault.tolerant',
    'first to market',
    'flexibility',
    'followup',
    'foot view',
    'front lines',
    'functional',
    'full benefit',
    'game plan',
    'go public',
    'go to market',
    'goals?',
    'going forward',
    'google juice',
    'graceful.degradation',
    'gradual.enhancement',
    'granular',
    'growth',
    'grow',
    'guidance',
    'hardball',
    'having said that',
    'heads.up',
    'heavy.lifting',
    'herding cats',
    'high.level',
    '(high|mass).impact',
    'impactful',
    'implementation',
    'in a nutshell',
    'incent',
    'incentivize',
    'innovat(e|ed|ion|ive|ing)',
    'integrat(e|ed|ion)',
    'internet of things',
    'intellectual property',
    'intuitive',
    'knowledge base',
    'knowledge transfer',
    'landing pages?',
    'lead the field',
    'leadership',
    'legacy',
    'lessons learned',
    'level playing field',
    'level set',
    'leverage',
    'low-hanging fruit',
    'look.(&|and).feel',
    'market leader',
    'market window',
    'marketing collateral',
    'maximize',
    'measurement',
    'methodolog(y|ies)',
    'metrics',
    'middleware',
    'milestone',
    'mind share',
    'mind shower',
    'mindset',
    'mindshare',
    '(mission|time).critical',
    'monetize',
    'moving forward',
    'multitask(ing?)',
    'negotiated',
    'networking',
    'new economy',
    'next level',
    'niches?',
    'no-brainer',
    'non-traditional management',
    'objectives',
    'occupy the field',
    'off.site',
    'off.the.(radar|shelf)',
    'on board',
    'on the (back end|radar screen|same page)',
    'one to one',
    'opportunit(y|ies)',
    '(search engine )?optimization',
    'out(side)?.of.the.(box|loop)',
    'outsourc(e|ed|ing)',
    '(total cost of )?ownership',
    'paradigms?( shift)?',
    'partner(ships?)?',
    'patent',
    'performance indicators',
    'personalization',
    'perspective',
    'phase',
    'phased approach',
    'pipeline',
    'planning horizon',
    'plug.?in',
    'prioritized?',
    'proactive',
    'problem space',
    'processes',
    'profit(ability)?',
    'promotion',
    'promotional collateral',
    'proprietary',
    'proof.of.concept',
    'push the envelope',
    'push.back',
    'quick win',
    'rais(e|ing) the bar',
    'ramp.up',
    'relationship management',
    'responsive',
    'engage(ments?)?',
    'reach out',
    'reactivation',
    'real.time',
    'real.world',
    'reconfigure',
    'red flag',
    'reengineering',
    'reinvent(ing)? the(.square)? wheel',
    'reinvigorate',
    'relevance',
    'repurpose',
    'resource allocation',
    'restructuring',
    'retention',
    'return on investment',
    'reus(e|ability)',
    'revenue',
    'reverse.engineer',
    'revisit',
    'road ?map',
    'robust',
    'roi',
    'run the numbers',
    'scale',
    'scenarios?',
    'scope',
    'seamless',
    'secret sauce',
    'segment',
    'self-managed team',
    'seo',
    'shareholder value',
    'single-source responsibility',
    'skill sets?',
    'smoke (&|and) mirrors',
    'social(.media|.gaming|.networks?)',
    'solutions?',
    'soup to nuts',
    'sow',
    'stakeholder',
    'startup',
    'statement of work',
    'sticky-?ness',
    'strateg(y|ic|ize)',
    'streamline',
    'success',
    'sustainab(le|ility)',
    'synerg(y|ies)',
    'tailwinds?',
    'take offline',
    'talking points',
    'target (audience|group)',
    'targeted',
    'tasked',
    'tco',
    'team.building',
    'team.player',
    'teamwork',
    'technologies',
    'that being said',
    'time.to.market',
    'timelines?',
    'top.down',
    'top of the game',
    'total quality',
    'touch.base',
    'touchpoints',
    'traction',
    'turnkey',
    'up.to.speed',
    'up-?sell',
    'upside',
    'user.friendly',
    'user.experience',
    'utiliz(e|ation)',
    'unique approach',
    'values?',
    'value-added',
    'vertical market',
    'viral',
    'virtual(ization)?',
    'visibility',
    'vision',
    'walk the talk',
    'web.enabled',
    'win-win',
    'wisdom of crowds',
    'workflow',
    'workshop',
    'world.?class',
    'wow.factor',

    // technical bullshit
    'cloud',
    '(object|aspect).oriented',
    '(framework|platform).agnostic',
    '(front.?end.|ui.)?framework',
    'html5',
    'mv(c|p)',
    'nosql',
    'off-?line',
    'oop',
    'web (2|3)\\.0'
];
