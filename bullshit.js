/*
 Bullshit.js v0.1 (2013-01-10)
 https://github.com/mourner/bullshit.js
 (c) 2013 Vladimir Agafonkin, MIT License
*/
window.findAndReplaceDOMText=function(){function e(e,i,o,u){var a,f=[],l=n(i),c=s(o);if(!l)return;if(e.global)while(a=e.exec(l))f.push(t(a,u));else a=l.match(e),f.push(t(a,u));f.length&&r(i,f,c)}function t(e,t){t=t||0;if(!e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";var n=e.index;if(t>0){var r=e[t];if(!r)throw"Invalid capture group";n+=e[0].indexOf(r),e[0]=r}return[n,n+e[0].length,[e[0]]]}function n(e){if(e.nodeType===3)return e.data;var t="";if(e=e.firstChild)do t+=n(e);while(e=e.nextSibling);return t}function r(e,t,n){var r,i,s,o,u,a,f=[],l=0,c=e,h=t.shift(),p=0;e:for(;;){c.nodeType===3&&(!o&&c.length+l>=h[1]?(o=c,a=h[1]-l):s&&f.push(c),!s&&c.length+l>h[0]&&(s=c,u=h[0]-l),l+=c.length);if(s&&o){c=n({startNode:s,startNodeIndex:u,endNode:o,endNodeIndex:a,innerNodes:f,match:h[2],matchIndex:p}),l-=o.length-a,s=null,o=null,f=[],h=t.shift(),p++;if(!h)break}else if(c.firstChild||c.nextSibling){c=c.firstChild||c.nextSibling;continue}for(;;){if(c.nextSibling){c=c.nextSibling;break}if(c.parentNode===e)break e;c=c.parentNode}}}function s(e){i=[];var t;if(typeof e!="function"){var n=e.nodeType?e:document.createElement(e);t=function(e){var t=document.createElement("div"),r;return t.innerHTML=n.outerHTML||(new XMLSerializer).serializeToString(n),r=t.firstChild,e&&r.appendChild(document.createTextNode(e)),r}}else t=e;return function(n){var r=n.startNode,s=n.endNode,o=n.matchIndex;if(r===s){var u=r;if(n.startNodeIndex>0){var a=document.createTextNode(u.data.substring(0,n.startNodeIndex));u.parentNode.insertBefore(a,u)}var f=t(n.match[0],o);u.parentNode.insertBefore(f,u);if(n.endNodeIndex<u.length){var l=document.createTextNode(u.data.substring(n.endNodeIndex));u.parentNode.insertBefore(l,u)}return u.parentNode.removeChild(u),i.push(function(){var e=f.parentNode;e.insertBefore(f.firstChild,f),e.removeChild(f),e.normalize()}),f}var a=document.createTextNode(r.data.substring(0,n.startNodeIndex)),l=document.createTextNode(s.data.substring(n.endNodeIndex)),c=t(r.data.substring(n.startNodeIndex),o),h=[];for(var p=0,d=n.innerNodes.length;p<d;++p){var v=n.innerNodes[p],m=t(v.data,o);v.parentNode.replaceChild(m,v),h.push(m)}var g=t(s.data.substring(0,n.endNodeIndex),o);return r.parentNode.insertBefore(a,r),r.parentNode.insertBefore(c,r),r.parentNode.removeChild(r),s.parentNode.insertBefore(g,s),s.parentNode.insertBefore(l,s),s.parentNode.removeChild(s),i.push(function(){h.unshift(c),h.push(g);for(var e=0,t=h.length;e<t;++e){var n=h[e],r=n.parentNode;r.insertBefore(n.firstChild,n),r.removeChild(n),r.normalize()}}),g}}var i;return e.revert=function(){for(var t=0,n=i.length;t<n;++t)i[t]();i=[]},e}(),function(e,t){function r(e){var t=e.charAt(0),n=(t===t.toUpperCase()?"B":"b")+"ullshit";e.substr(e.length-3)==="ing"&&(n+="ing");var r=document.createElement("abbr");return r.style.color="red",r.title=e,r.innerHTML=n,r}var n=["(market|goal|community|quality|results|sales|user|customer|subject|role|service|client|process|business).((centric(ity)?)|facing|oriented|driven|focused|assessment|service)","24/7","a-b testing","accessib(le|ility)","acquisition","action items?","advantages?","aggregate","analytics?","application service providers?","assets?","authoritative","automated","b2b","back to the drawing board","ball.?park","band.aid","bandwidth","benchmark","(benefit|gap) analysis","best.of.breed","best.practice","big.data","big picture","bottom line","bottom.up","brain.?storm","brain.?dump","brand(s?|ing|ed)","burn.rates?","business.(cases|plans)?","buzz","call to action","capacity","capitalize","center of excellence","challenges?","change agent","circle the wagons","collaborat(e|ion)","communicat(e|ion)","compelling","competitive( advantage)?","connect the dots","content management","contingency plan","control group","convergent","conversion","core business","core competenc(y|ies)","cost-effective","cost/benefit","craftsmanship","critical path","crm","cross.sell","crowd.?(fund(s?|ed|ing)|sourc(ed|e|ing))","cutting.edge","data mining","deep dive","delight the customers?","deliverables?","demographic","discovery","diversity","downsize","drill down","drink the kool-aid","drop.?in","drop the ball","due dilligence","dynamic","e-?(business|commerce|tailers)","ecosystems?","efficien(t|cy)","elaboration","elephant in the room","elevator pitch","emerging markets","empower(ment)?","end of the day","end to end","engage","enhance","enterprise","eta","etched in stone","exceed expectations","expectations","experiences","exposure","eyeballs","facilitat(e|or)","fast track","fault.tolerant","first to market","flexibility","followup","foot view","front lines","functional","full benefit","game plan","go public","go to market","goals?","going forward","google juice","graceful.degradation","gradual.enhancement","granular","growth","grow","guidance","hardball","having said that","heads.up","heavy.lifting","herding cats","high.level","(high|mass).impact","impactful","implementation","in a nutshell","incent","incentivize","innovat(e|ed|ion|ive|ing)","integrat(e|ed|ion)","internet of things","intellectual property","intuitive","knowledge base","knowledge transfer","landing pages?","lead the field","leadership","legacy","lessons learned","level playing field","level set","leverage","low-hanging fruit","look.(&|and).feel","market leader","market window","marketing collateral","maximize","measurement","methodolog(y|ies)","metrics","middleware","milestone","mind share","mind shower","mindset","mindshare","(mission|time).critical","monetize","moving forward","multitask(ing?)","negotiated","networking","new economy","next level","niches?","no-brainer","non-traditional management","objectives","occupy the field","off.site","off.the.(radar|shelf)","on board","on the (back end|radar screen|same page)","one to one","opportunit(y|ies)","(search engine )?optimization","out(side)?.of.the.(box|loop)","outsourc(e|ed|ing)","(total cost of )?ownership","paradigms?( shift)?","partner(ships?)?","patent","performance indicators","personalization","perspective","phase","phased approach","pipeline","planning horizon","plug.?in","prioritized?","proactive","problem space","processes","profit(ability)?","promotion","promotional collateral","proprietary","proof.of.concept","push the envelope","push.back","quick win","rais(e|ing) the bar","ramp.up","relationship management","responsive","engage(ments?)?","reach out","reactivation","real.time","real.world","reconfigure","red flag","reengineering","reinvent(ing)? the(.square)? wheel","reinvigorate","relevance","repurpose","resource allocation","restructuring","retention","return on investment","reus(e|ability)","revenue","reverse.engineer","revisit","road ?map","robust","roi","run the numbers","scale","scenarios?","scope","seamless","secret sauce","segment","self-managed team","seo","shareholder value","single-source responsibility","skill sets?","smoke (&|and) mirrors","social(.media|.gaming|.networks?)","solutions?","soup to nuts","sow","stakeholder","startup","statement of work","sticky-?ness","strateg(y|ic|ize)","streamline","success","sustainab(le|ility)","synerg(y|ies)","tailwinds?","take offline","talking points","target (audience|group)","targeted","tasked","tco","team.building","team.player","teamwork","technologies","that being said","time.to.market","timelines?","top.down","top of the game","total quality","touch.base","touchpoints","traction","turnkey","up.to.speed","up-?sell","upside","user.friendly","user.experience","utiliz(e|ation)","unique approach","values?","value-added","vertical market","viral","virtual(ization)?","visibility","vision","walk the talk","web.enabled","win-win","wisdom of crowds","workflow","workshop","world.?class","wow.factor","cloud","(object|aspect).oriented","(framework|platform).agnostic","(front.?end.|ui.)?framework","html5","mv(c|p)","nosql","off-?line","oop","web (2|3)\\.0"],i=new RegExp("("+n.join("|")+")(?!\\w|[^<]*>)","gi");findAndReplaceDOMText(i,document.body,r)}(this);