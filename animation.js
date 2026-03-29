 
// ── TYPING ANIMATION ────────────────────────────────────
const TW=['sign 🤙','hello 👋','love ❤️','friend 🤝','good morning ☀️'];
let twi=0,tci=0,tdir=1;
function typeA(){
  const el=document.getElementById('tw'),w=TW[twi];
  if(tdir===1){el.textContent=w.slice(0,++tci);if(tci>=w.length){tdir=-1;setTimeout(typeA,1800);return}}
  else{el.textContent=w.slice(0,--tci);if(tci<=0){tdir=1;twi=(twi+1)%TW.length;setTimeout(typeA,350);return}}
  setTimeout(typeA,tdir===1?85:45);
}
typeA();

// ── SIGN DATA ───────────────────────────────────────────
const S={
  A:{f:[2,2,2,2,2],th:'side',w:0,type:'letter'},
  B:{f:[2,0,0,0,0],th:'folded',w:0,type:'letter'},
  C:{f:[1,1,1,1,1],th:'curve',w:0,type:'letter',curve:true},
  D:{f:[2,0,2,2,2],th:'touch',w:0,type:'letter'},
  E:{f:[1,1,1,1,1],th:'under',w:0,type:'letter'},
  F:{f:[2,2,0,0,0],th:'touch_idx',w:0,type:'letter'},
  G:{f:[1,0,2,2,2],th:'point',w:15,type:'letter'},
  H:{f:[2,0,0,2,2],th:'folded',w:15,type:'letter'},
  I:{f:[2,2,2,2,0],th:'folded',w:0,type:'letter'},
  J:{f:[2,2,2,2,0],th:'folded',w:0,type:'letter',motion:{t:'arc',dx:28,dy:-18}},
  K:{f:[1,0,0,2,2],th:'between',w:0,type:'letter'},
  L:{f:[1,0,2,2,2],th:'up',w:0,type:'letter'},
  M:{f:[1,2,2,2,2],th:'under3',w:0,type:'letter'},
  N:{f:[1,2,2,2,2],th:'under2',w:0,type:'letter'},
  O:{f:[1,1,1,1,1],th:'o',w:0,type:'letter',oval:true},
  P:{f:[1,0,2,2,2],th:'point',w:-30,type:'letter'},
  Q:{f:[2,0,2,2,2],th:'point2',w:-40,type:'letter'},
  R:{f:[2,0,0,2,2],th:'folded',w:0,type:'letter',cross:true},
  S:{f:[2,2,2,2,2],th:'front',w:0,type:'letter'},
  T:{f:[1,2,2,2,2],th:'between_if',w:0,type:'letter'},
  U:{f:[2,0,0,2,2],th:'folded',w:0,type:'letter'},
  V:{f:[2,0,0,2,2],th:'folded',w:0,type:'letter',vsplit:true},
  W:{f:[2,0,0,0,2],th:'folded',w:0,type:'letter'},
  X:{f:[2,1,2,2,2],th:'folded',w:0,type:'letter'},
  Y:{f:[0,2,2,2,0],th:'out',w:0,type:'letter'},
  Z:{f:[2,0,2,2,2],th:'folded',w:0,type:'letter',motion:{t:'z',dx:28,dy:18}},
  HELLO:{f:[2,0,0,0,0],th:'folded',w:22,type:'word',cat:'greet',desc:'Open-hand salute sweeping outward from forehead',motion:{t:'arc',dx:40,dy:-10},hands:'right'},
  HI:{f:[2,0,0,0,0],th:'folded',w:28,type:'word',cat:'greet',desc:'Quick friendly wave from temple',motion:{t:'wave',dx:30,dy:0},hands:'right'},
  BYE:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'greet',desc:'Wave fingers — goodbye!',motion:{t:'wave',dx:0,dy:18},hands:'right'},
  GOOD_MORNING:{f:[2,0,0,0,0],th:'folded',w:20,type:'word',cat:'greet',desc:'Flat hand sweeps upward like the rising sun',motion:{t:'arc',dx:20,dy:-25},hands:'right'},
  GOOD_NIGHT:{f:[2,0,0,0,0],th:'folded',w:-25,type:'word',cat:'greet',desc:'Fingers bend down like the sun setting',motion:{t:'down',dx:0,dy:22},hands:'right'},
  THANK:{f:[2,0,0,0,0],th:'folded',w:30,type:'word',cat:'greet',desc:'Flat hand moves from chin forward',motion:{t:'forward',dx:0,dy:-28},hands:'right'},
  SORRY:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'greet',desc:'A-hand circles on chest',motion:{t:'circle',r:22},hands:'right'},
  PLEASE:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'greet',desc:'B-hand rubs circle on chest',motion:{t:'circle',r:18},hands:'right'},
  WELCOME:{f:[2,0,0,0,0],th:'folded',w:15,type:'word',cat:'greet',desc:'Open hand sweeps inward',motion:{t:'arc',dx:-28,dy:0},hands:'right'},
  YES:{f:[2,2,2,2,2],th:'front',w:-10,type:'word',cat:'greet',desc:'S-hand nods like a head saying yes',motion:{t:'nod',dx:0,dy:14},hands:'right'},
  NO:{f:[2,0,0,2,2],th:'side',w:0,type:'word',cat:'greet',desc:'Index and middle snap to thumb',motion:{t:'snap',dx:0,dy:9},hands:'right'},
  HOW_ARE_YOU:{f:[1,0,0,0,0],th:'up',w:0,type:'word',cat:'greet',desc:'Bent hands turn upward — how are you?',motion:{t:'up',dx:0,dy:-20},hands:'both'},
  EXCUSE_ME:{f:[2,0,0,0,0],th:'folded',w:10,type:'word',cat:'greet',desc:'Fingertips brush across palm',motion:{t:'side',dx:28,dy:0},hands:'both'},
  NAME:{f:[2,0,0,2,2],th:'folded',w:0,type:'word',cat:'greet',desc:'H-fingers tap each other',motion:{t:'tap',dx:0,dy:7},hands:'both'},
  LOVE:{f:[2,2,2,2,2],th:'side',w:-15,type:'word',cat:'emotion',desc:'Cross fists over chest — warm hug!',motion:{t:'in',dx:0,dy:18},hands:'both'},
  HAPPY:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'emotion',desc:'B-hand brushes up on chest — joy rising!',motion:{t:'up',dx:0,dy:-28},hands:'right'},
  SAD:{f:[2,0,0,0,0],th:'folded',w:-20,type:'word',cat:'emotion',desc:'Open hands slide down face — tears',motion:{t:'down',dx:0,dy:28},hands:'both'},
  ANGRY:{f:[1,1,1,1,1],th:'curve',w:0,type:'word',cat:'emotion',desc:'Bent hands pull down from face',motion:{t:'down',dx:0,dy:22},hands:'both'},
  SCARED:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'emotion',desc:'Fists shake in front of chest',motion:{t:'shake',dx:14,dy:0},hands:'both'},
  EXCITED:{f:[1,0,2,2,2],th:'up',w:0,type:'word',cat:'emotion',desc:'Hands brush up on chest — energy!',motion:{t:'circle',r:16},hands:'both'},
  TIRED:{f:[2,0,0,0,0],th:'folded',w:-28,type:'word',cat:'emotion',desc:'Hands drop and rotate — wilting',motion:{t:'down',dx:0,dy:18},hands:'both'},
  GOOD:{f:[2,0,0,0,0],th:'folded',w:30,type:'word',cat:'emotion',desc:'Flat hand from mouth to palm',motion:{t:'forward',dx:0,dy:-18},hands:'right'},
  BAD:{f:[2,0,0,0,0],th:'folded',w:-28,type:'word',cat:'emotion',desc:'Hand flips down from mouth',motion:{t:'flip',dx:0,dy:18},hands:'right'},
  FUNNY:{f:[2,0,0,2,2],th:'folded',w:10,type:'word',cat:'emotion',desc:'U-hand brushes nose twice',motion:{t:'tap',dx:0,dy:5},hands:'right'},
  SURPRISED:{f:[0,0,0,0,0],th:'out',w:0,type:'word',cat:'emotion',desc:'Open hands fly up from cheeks',motion:{t:'up',dx:0,dy:-25},hands:'both'},
  I_LOVE_YOU:{f:[0,0,2,2,0],th:'out',w:0,type:'word',cat:'emotion',desc:'ILY hand — pinky, index, thumb out!',motion:{t:'shake',dx:10,dy:0},hands:'right'},
  BOY:{f:[1,0,0,0,0],th:'up',w:0,type:'word',cat:'people',desc:'Bent hand at brim of imaginary cap',motion:{t:'tap',dx:0,dy:0},hands:'right'},
  GIRL:{f:[2,0,2,2,2],th:'out',w:0,type:'word',cat:'people',desc:'Thumb strokes down side of cheek',motion:{t:'down',dx:0,dy:14},hands:'right'},
  MAN:{f:[0,0,0,0,0],th:'up',w:0,type:'word',cat:'people',desc:'Open hand at forehead then stomach',motion:{t:'down',dx:0,dy:20},hands:'right'},
  WOMAN:{f:[2,0,2,2,2],th:'out',w:0,type:'word',cat:'people',desc:'Thumb strokes from chin to stomach',motion:{t:'down',dx:0,dy:20},hands:'right'},
  BABY:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'people',desc:'Cradle arms and rock gently',motion:{t:'rock',dx:10,dy:8},hands:'both'},
  CHILD:{f:[2,0,0,0,0],th:'folded',w:-15,type:'word',cat:'people',desc:'Flat hand pats downward — child height',motion:{t:'down',dx:0,dy:14},hands:'right'},
  MOTHER:{f:[0,0,0,0,0],th:'up',w:0,type:'word',cat:'people',desc:'Open-5 thumb taps chin twice',motion:{t:'tap',dx:0,dy:0},hands:'right'},
  FATHER:{f:[0,0,0,0,0],th:'up',w:0,type:'word',cat:'people',desc:'Open-5 thumb taps forehead twice',motion:{t:'tap',dx:0,dy:0},hands:'right'},
  SISTER:{f:[2,0,2,2,2],th:'out',w:0,type:'word',cat:'people',desc:'A-hand at chin then index fingers align',motion:{t:'side',dx:20,dy:0},hands:'right'},
  BROTHER:{f:[1,0,2,2,2],th:'up',w:0,type:'word',cat:'people',desc:'L-hand at forehead then index fingers align',motion:{t:'side',dx:20,dy:0},hands:'right'},
  FRIEND:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'people',desc:'Index fingers hook together and swap',motion:{t:'swap',dx:0,dy:9},hands:'both'},
  FAMILY:{f:[2,0,2,2,2],th:'up',w:0,type:'word',cat:'people',desc:'F-hands circle outward — family circle',motion:{t:'circle',r:28},hands:'both'},
  TEACHER:{f:[1,1,1,1,1],th:'o',w:0,oval:true,type:'word',cat:'people',desc:'Flat-O hands move out from temples',motion:{t:'arc',dx:22,dy:0},hands:'both'},
  DOCTOR:{f:[2,0,0,2,2],th:'folded',w:0,type:'word',cat:'people',desc:'D-hand taps wrist — checking pulse',motion:{t:'tap',dx:0,dy:0},hands:'right'},
  GRANDMA:{f:[0,0,0,0,0],th:'up',w:0,type:'word',cat:'people',desc:'MOTHER sign bounced forward twice',motion:{t:'arc',dx:18,dy:0},hands:'right'},
  GRANDPA:{f:[0,0,0,0,0],th:'up',w:0,type:'word',cat:'people',desc:'FATHER sign bounced forward twice',motion:{t:'arc',dx:18,dy:0},hands:'right'},
  FOOD:{f:[1,1,1,1,1],th:'o',w:0,oval:true,type:'word',cat:'food',desc:'Fingertips tap mouth — yummy!',motion:{t:'tap',dx:0,dy:5},hands:'right'},
  EAT:{f:[1,1,1,1,1],th:'o',w:0,oval:true,type:'word',cat:'food',desc:'Flat-O taps mouth — nom nom!',motion:{t:'tap',dx:0,dy:7},hands:'right'},
  DRINK:{f:[1,1,1,1,1],th:'curve',w:20,type:'word',cat:'food',desc:'C-hand tilts up to mouth',motion:{t:'up',dx:0,dy:-18},hands:'right'},
  WATER:{f:[2,0,0,2,2],th:'folded',w:10,type:'word',cat:'food',desc:'W-hand taps lips twice',motion:{t:'tap',dx:0,dy:5},hands:'right'},
  MILK:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'food',desc:'Fist squeezes open and closed',motion:{t:'squeeze',dx:0,dy:10},hands:'right'},
  APPLE:{f:[2,0,2,2,2],th:'up',w:0,type:'word',cat:'food',desc:'X-hand twists at cheek',motion:{t:'circle',r:10},hands:'right'},
  BANANA:{f:[2,0,2,2,2],th:'out',w:0,type:'word',cat:'food',desc:'Finger peels downward like a banana',motion:{t:'down',dx:0,dy:16},hands:'both'},
  PIZZA:{f:[2,0,0,2,2],th:'folded',w:10,type:'word',cat:'food',desc:'P-hand makes Z motion',motion:{t:'z',dx:22,dy:16},hands:'right'},
  CAKE:{f:[1,0,2,2,2],th:'up',w:-10,type:'word',cat:'food',desc:'K-hand slides over fist — icing',motion:{t:'down',dx:0,dy:14},hands:'both'},
  ICE_CREAM:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'food',desc:'S-hand licks downward — ice cream cone!',motion:{t:'down',dx:0,dy:18},hands:'right'},
  CHOCOLATE:{f:[1,1,1,1,1],th:'o',w:0,oval:true,type:'word',cat:'food',desc:'C-hand circles over back of other hand',motion:{t:'circle',r:16},hands:'both'},
  COFFEE:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'food',desc:'S-hands circle like grinding coffee',motion:{t:'circle',r:14},hands:'both'},
  HOT:{f:[1,1,1,1,1],th:'curve',w:0,type:'word',cat:'food',desc:'Curved hand rotates away from mouth',motion:{t:'arc',dx:22,dy:8},hands:'right'},
  COLD:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'food',desc:'Fists shiver — brrr!',motion:{t:'shake',dx:8,dy:0},hands:'both'},
  SWEET:{f:[2,0,0,0,0],th:'up',w:0,type:'word',cat:'food',desc:'Fingers brush chin downward — sweet!',motion:{t:'down',dx:0,dy:10},hands:'right'},
  HUNGRY:{f:[1,1,1,1,1],th:'curve',w:0,type:'word',cat:'food',desc:'C-hand slides down chest — empty tummy',motion:{t:'down',dx:0,dy:22},hands:'right'},
  SLEEP:{f:[0,0,0,0,0],th:'out',w:-28,type:'word',cat:'daily',desc:'Open hand droops as eyes close — zzz!',motion:{t:'down',dx:0,dy:18},hands:'right'},
  WAKE_UP:{f:[1,1,2,2,2],th:'up',w:0,type:'word',cat:'daily',desc:'Index and middle spring open near eyes',motion:{t:'up',dx:0,dy:-18},hands:'both'},
  BRUSH_TEETH:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'daily',desc:'Index brushes across teeth back and forth',motion:{t:'side',dx:24,dy:0},hands:'right'},
  SHOWER:{f:[0,0,0,0,0],th:'out',w:0,type:'word',cat:'daily',desc:'Open hand above head — water falling',motion:{t:'down',dx:0,dy:22},hands:'right'},
  WALK:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'daily',desc:'Flat hands alternate stepping forward',motion:{t:'forward',dx:0,dy:-16},hands:'both'},
  RUN:{f:[1,0,2,2,2],th:'up',w:15,type:'word',cat:'daily',desc:'L-hands hook and pump — running!',motion:{t:'forward',dx:0,dy:-20},hands:'both'},
  READ:{f:[2,0,0,2,2],th:'folded',w:0,type:'word',cat:'daily',desc:'V-fingers sweep across open palm',motion:{t:'side',dx:28,dy:0},hands:'both'},
  WRITE:{f:[2,0,2,2,2],th:'up',w:10,type:'word',cat:'daily',desc:'Index finger writes on palm',motion:{t:'side',dx:20,dy:0},hands:'both'},
  PLAY:{f:[0,2,2,2,0],th:'out',w:0,type:'word',cat:'daily',desc:'Y-hands shake — let\'s play!',motion:{t:'shake',dx:14,dy:0},hands:'both'},
  WORK:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'daily',desc:'S-hands tap wrists together',motion:{t:'tap',dx:0,dy:9},hands:'both'},
  HOME:{f:[1,1,1,1,1],th:'o',w:0,oval:true,type:'word',cat:'daily',desc:'O-hand at mouth then flat on cheek',motion:{t:'arc',dx:18,dy:0},hands:'right'},
  SCHOOL:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'daily',desc:'Open hands clap together twice',motion:{t:'tap',dx:0,dy:0},hands:'both'},
  BOOK:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'daily',desc:'Flat palms open like a book',motion:{t:'open',dx:22,dy:0},hands:'both'},
  PENCIL:{f:[2,0,2,2,2],th:'up',w:10,type:'word',cat:'daily',desc:'Index and thumb hold pencil and write',motion:{t:'side',dx:18,dy:0},hands:'right'},
  PHONE:{f:[0,2,2,2,0],th:'out',w:0,type:'word',cat:'daily',desc:'Y-hand (thumb + pinky) held to ear',motion:{t:'tap',dx:0,dy:0},hands:'right'},
  MUSIC:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'daily',desc:'Flat hand waves like a conductor',motion:{t:'wave',dx:28,dy:0},hands:'right'},
  CAR:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'daily',desc:'Fists turn steering wheel — vroom!',motion:{t:'circle',r:20},hands:'both'},
  HELP:{f:[2,2,2,2,2],th:'up',w:-18,type:'word',cat:'basics',desc:'Fist on palm lifts upward — helping hand!',motion:{t:'up',dx:0,dy:-28},hands:'both'},
  MORE:{f:[1,1,1,1,1],th:'o',w:0,oval:true,type:'word',cat:'basics',desc:'Flat-O hands tap fingertips — more please!',motion:{t:'tap',dx:18,dy:0},hands:'both'},
  STOP:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'basics',desc:'Open hand chops down onto palm',motion:{t:'chop',dx:0,dy:18},hands:'both'},
  WAIT:{f:[0,0,0,0,0],th:'out',w:0,type:'word',cat:'basics',desc:'Both hands wiggle — hold on!',motion:{t:'wiggle',dx:7,dy:0},hands:'both'},
  KNOW:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'basics',desc:'Bent-B taps forehead — I know!',motion:{t:'tap',dx:0,dy:0},hands:'right'},
  UNDERSTAND:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'basics',desc:'Index flicks up from forehead — lightbulb!',motion:{t:'up',dx:0,dy:-16},hands:'right'},
  COME:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'basics',desc:'Index finger curls toward yourself',motion:{t:'in',dx:0,dy:0},hands:'right'},
  GO:{f:[2,0,2,2,2],th:'folded',w:15,type:'word',cat:'basics',desc:'Index points and pushes forward',motion:{t:'forward',dx:0,dy:-22},hands:'right'},
  LEARN:{f:[1,1,1,1,1],th:'o',w:20,oval:true,type:'word',cat:'basics',desc:'Fingers gather to forehead — learning!',motion:{t:'up',dx:0,dy:-28},hands:'right'},
  SIGN:{f:[0,0,2,2,2],th:'out',w:0,type:'word',cat:'basics',desc:'Alternating index fingers circle',motion:{t:'circle',r:18},hands:'both'},
  DEAF:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'basics',desc:'Index touches ear then corner of mouth',motion:{t:'arc',dx:0,dy:28},hands:'right'},
  RED:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'color',desc:'Index strokes down from lips',motion:{t:'down',dx:0,dy:10},hands:'right'},
  BLUE:{f:[0,0,0,0,0],th:'out',w:15,type:'word',cat:'color',desc:'B-hand shakes at the side',motion:{t:'shake',dx:9,dy:0},hands:'right'},
  GREEN:{f:[2,0,0,2,2],th:'folded',w:20,type:'word',cat:'color',desc:'G-hand shakes at wrist',motion:{t:'shake',dx:11,dy:0},hands:'right'},
  YELLOW:{f:[0,2,2,2,0],th:'out',w:15,type:'word',cat:'color',desc:'Y-hand shakes at wrist',motion:{t:'shake',dx:11,dy:0},hands:'right'},
  WHITE:{f:[0,0,0,0,0],th:'out',w:0,type:'word',cat:'color',desc:'Open hand pulls away from chest',motion:{t:'forward',dx:0,dy:-22},hands:'right'},
  BLACK:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'color',desc:'Index strokes across forehead',motion:{t:'side',dx:36,dy:0},hands:'right'},
  PURPLE:{f:[2,0,0,2,2],th:'folded',w:15,type:'word',cat:'color',desc:'P-hand shakes at wrist',motion:{t:'shake',dx:11,dy:0},hands:'right'},
  ONE:{f:[2,0,2,2,2],th:'folded',w:0,type:'number',cat:'number',desc:'Index finger points straight up'},
  TWO:{f:[2,0,0,2,2],th:'folded',w:0,type:'number',cat:'number',desc:'Index and middle up — V shape!',vsplit:true},
  THREE:{f:[2,0,0,0,2],th:'up',w:0,type:'number',cat:'number',desc:'Index, middle, ring with thumb'},
  FOUR:{f:[2,0,0,0,0],th:'folded',w:0,type:'number',cat:'number',desc:'Four fingers up, thumb tucked'},
  FIVE:{f:[0,0,0,0,0],th:'out',w:0,type:'number',cat:'number',desc:'All five fingers wide open!'},
  SIX:{f:[0,2,2,2,0],th:'out',w:0,type:'number',cat:'number',desc:'Pinky and thumb touch others'},
  SEVEN:{f:[0,2,2,0,2],th:'out',w:0,type:'number',cat:'number',desc:'Ring and thumb touch'},
  EIGHT:{f:[0,2,0,2,2],th:'out',w:0,type:'number',cat:'number',desc:'Middle and thumb touch'},
  NINE:{f:[0,0,2,2,2],th:'up',w:0,type:'number',cat:'number',desc:'Index bends toward thumb'},
  TEN:{f:[2,2,2,2,2],th:'up',w:0,type:'number',cat:'number',desc:'Thumb up, shake wrist!',motion:{t:'shake',dx:10,dy:0}},
  TIME:{f:[2,0,2,2,2],th:'side',w:0,type:'word',cat:'daily',desc:'Index taps wrist — checking watch',motion:{t:'tap',dx:0,dy:0},hands:'right'},

  // ── QUESTION WORDS ──────────────────────────────────────
  WHAT:{f:[0,0,0,0,0],th:'out',w:0,type:'word',cat:'question',desc:'Index sweeps across fingers of other hand — what?',motion:{t:'side',dx:22,dy:0},hands:'both'},
  WHEN:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'question',desc:'Index finger circles then taps — when?',motion:{t:'circle',r:12},hands:'right'},
  WHERE:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'question',desc:'Index shakes side to side — where?',motion:{t:'shake',dx:14,dy:0},hands:'right'},
  WHY:{f:[2,0,0,0,0],th:'folded',w:20,type:'word',cat:'question',desc:'Middle finger bends down from forehead — why?',motion:{t:'down',dx:0,dy:14},hands:'right'},
  HOW:{f:[1,0,0,0,0],th:'up',w:0,type:'word',cat:'question',desc:'Bent hands flip upward together — how?',motion:{t:'up',dx:0,dy:-18},hands:'both'},
  WHICH:{f:[0,2,2,2,0],th:'out',w:0,type:'word',cat:'question',desc:'Y-hands alternate up and down — which one?',motion:{t:'nod',dx:0,dy:14},hands:'both'},
  WHO:{f:[1,0,2,2,2],th:'up',w:0,type:'word',cat:'question',desc:'L-hand circles near mouth — who?',motion:{t:'circle',r:12},hands:'right'},
  WHOM:{f:[1,0,2,2,2],th:'up',w:0,type:'word',cat:'question',desc:'L-hand circles near mouth — whom?',motion:{t:'circle',r:12},hands:'right'},
  WHOSE:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'question',desc:'S-hand circles near mouth — whose?',motion:{t:'circle',r:12},hands:'right'},

  // ── AUXILIARY VERBS ─────────────────────────────────────
  IS:{f:[2,2,2,2,0],th:'folded',w:0,type:'word',cat:'verb',desc:'I-hand moves forward from chin — is',motion:{t:'forward',dx:0,dy:-16},hands:'right'},
  ARE:{f:[2,0,0,0,0],th:'folded',w:15,type:'word',cat:'verb',desc:'R-hand moves forward from lips — are',motion:{t:'forward',dx:0,dy:-16},hands:'right'},
  DO:{f:[1,1,1,1,1],th:'curve',w:0,type:'word',cat:'verb',desc:'Bent hands sweep side to side — do/doing',motion:{t:'side',dx:22,dy:0},hands:'both'},
  DOES:{f:[1,1,1,1,1],th:'curve',w:0,type:'word',cat:'verb',desc:'Bent hands sweep side to side — does',motion:{t:'side',dx:22,dy:0},hands:'both'},
  DID:{f:[1,1,1,1,1],th:'curve',w:-15,type:'word',cat:'verb',desc:'Bent hands sweep and drop — past tense did',motion:{t:'down',dx:0,dy:16},hands:'both'},
  CAN:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'verb',desc:'S-hands push down firmly — can/able',motion:{t:'down',dx:0,dy:16},hands:'both'},
  COULD:{f:[2,2,2,2,2],th:'front',w:-10,type:'word',cat:'verb',desc:'S-hands push down gently — could',motion:{t:'down',dx:0,dy:14},hands:'both'},
  WILL:{f:[2,0,0,0,0],th:'folded',w:15,type:'word',cat:'verb',desc:'Open hand moves forward from cheek — will/future',motion:{t:'forward',dx:0,dy:-20},hands:'right'},
  WOULD:{f:[2,0,0,0,0],th:'folded',w:10,type:'word',cat:'verb',desc:'Open hand moves forward softly — would',motion:{t:'forward',dx:0,dy:-16},hands:'right'},
  SHOULD:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'verb',desc:'S-hand taps wrist — should/must',motion:{t:'tap',dx:0,dy:8},hands:'right'},

  // ── PRONOUNS ─────────────────────────────────────────────
  I:{f:[2,2,2,2,0],th:'folded',w:0,type:'word',cat:'pronoun',desc:'I-hand (pinky up) points to self',motion:{t:'in',dx:0,dy:0},hands:'right'},
  ME:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'pronoun',desc:'Index finger points to your chest — me',motion:{t:'in',dx:0,dy:0},hands:'right'},
  YOU:{f:[2,0,2,2,2],th:'folded',w:15,type:'word',cat:'pronoun',desc:'Index finger points outward at the person — you',motion:{t:'forward',dx:0,dy:-20},hands:'right'},
  HE:{f:[2,0,2,2,2],th:'folded',w:20,type:'word',cat:'pronoun',desc:'Index points to the side — he',motion:{t:'side',dx:22,dy:0},hands:'right'},
  HIM:{f:[2,0,2,2,2],th:'folded',w:20,type:'word',cat:'pronoun',desc:'Index points to the side — him',motion:{t:'side',dx:22,dy:0},hands:'right'},
  SHE:{f:[2,0,2,2,2],th:'out',w:15,type:'word',cat:'pronoun',desc:'Thumb at cheek then index points out — she',motion:{t:'side',dx:22,dy:0},hands:'right'},
  HER:{f:[2,0,2,2,2],th:'out',w:15,type:'word',cat:'pronoun',desc:'Thumb at cheek then index points out — her',motion:{t:'side',dx:22,dy:0},hands:'right'},
  IT:{f:[2,0,2,2,2],th:'folded',w:10,type:'word',cat:'pronoun',desc:'Index points to a neutral space — it',motion:{t:'side',dx:16,dy:0},hands:'right'},
  WE:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'pronoun',desc:'Index touches shoulder then swings to other shoulder — we',motion:{t:'arc',dx:30,dy:0},hands:'right'},
  US:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'pronoun',desc:'U-hand touches shoulder then swings — us',motion:{t:'arc',dx:28,dy:0},hands:'right'},
  THEY:{f:[2,0,2,2,2],th:'folded',w:20,type:'word',cat:'pronoun',desc:'Index sweeps outward to both sides — they',motion:{t:'side',dx:30,dy:0},hands:'right'},
  THEM:{f:[2,0,2,2,2],th:'folded',w:20,type:'word',cat:'pronoun',desc:'Index sweeps outward — them',motion:{t:'side',dx:28,dy:0},hands:'right'},

  // ── POSSESSIVES ──────────────────────────────────────────
  MY:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'pronoun',desc:'Flat hand presses to own chest — my/mine',motion:{t:'in',dx:0,dy:10},hands:'right'},
  YOUR:{f:[2,0,0,0,0],th:'folded',w:15,type:'word',cat:'pronoun',desc:'Flat hand pushes toward the person — your',motion:{t:'forward',dx:0,dy:-16},hands:'right'},
  HIS:{f:[2,0,0,0,0],th:'folded',w:20,type:'word',cat:'pronoun',desc:'Flat hand pushes to the side — his',motion:{t:'side',dx:22,dy:0},hands:'right'},
  ITS:{f:[2,0,0,0,0],th:'folded',w:10,type:'word',cat:'pronoun',desc:'Flat hand pushes to neutral space — its',motion:{t:'side',dx:18,dy:0},hands:'right'},
  OUR:{f:[1,1,1,1,1],th:'curve',w:0,type:'word',cat:'pronoun',desc:'C-hand sweeps from one shoulder to the other — our',motion:{t:'arc',dx:28,dy:0},hands:'right'},
  THEIR:{f:[2,0,0,0,0],th:'folded',w:20,type:'word',cat:'pronoun',desc:'Flat hand sweeps outward to both sides — their',motion:{t:'side',dx:28,dy:0},hands:'right'},
  MINE:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'pronoun',desc:'Flat hand presses firmly to chest — mine!',motion:{t:'in',dx:0,dy:12},hands:'right'},
  YOURS:{f:[2,0,0,0,0],th:'folded',w:15,type:'word',cat:'pronoun',desc:'Flat hand pushes firmly toward person — yours',motion:{t:'forward',dx:0,dy:-18},hands:'right'},
  HERS:{f:[2,0,0,0,0],th:'folded',w:18,type:'word',cat:'pronoun',desc:'Flat hand pushes to the side — hers',motion:{t:'side',dx:22,dy:0},hands:'right'},
  OURS:{f:[1,1,1,1,1],th:'curve',w:0,type:'word',cat:'pronoun',desc:'C-hand sweeps from shoulder to shoulder — ours',motion:{t:'arc',dx:28,dy:0},hands:'right'},
  THEIRS:{f:[2,0,0,0,0],th:'folded',w:20,type:'word',cat:'pronoun',desc:'Flat hand sweeps outward — theirs',motion:{t:'side',dx:28,dy:0},hands:'right'},

  // ── ACTION VERBS ─────────────────────────────────────────
  GO:{f:[2,0,2,2,2],th:'folded',w:15,type:'word',cat:'verb',desc:'Index points and pushes forward — go!',motion:{t:'forward',dx:0,dy:-22},hands:'right'},
  COME:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'verb',desc:'Index curls toward yourself — come here!',motion:{t:'in',dx:0,dy:0},hands:'right'},
  SIT:{f:[2,0,0,2,2],th:'folded',w:0,type:'word',cat:'verb',desc:'V-fingers bend down onto other hand — sit down',motion:{t:'down',dx:0,dy:16},hands:'both'},
  STAND:{f:[2,0,0,2,2],th:'folded',w:0,type:'word',cat:'verb',desc:'V-fingers stand upright on open palm — stand up',motion:{t:'up',dx:0,dy:-16},hands:'both'},
  TALK:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'verb',desc:'Index taps mouth twice — talking!',motion:{t:'tap',dx:0,dy:5},hands:'right'},
  SAY:{f:[2,0,2,2,2],th:'folded',w:8,type:'word',cat:'verb',desc:'Index circles near mouth — say/saying',motion:{t:'circle',r:10},hands:'right'},
  TELL:{f:[2,0,2,2,2],th:'folded',w:10,type:'word',cat:'verb',desc:'Index sweeps from chin outward — tell',motion:{t:'forward',dx:0,dy:-18},hands:'right'},
  ASK:{f:[2,0,0,0,0],th:'folded',w:-15,type:'word',cat:'verb',desc:'Flat hands come together and bow — ask/request',motion:{t:'down',dx:0,dy:16},hands:'both'},
  ANSWER:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'verb',desc:'Index fingers from mouth sweep forward — answer',motion:{t:'forward',dx:0,dy:-18},hands:'both'},
  CALL:{f:[0,2,2,2,0],th:'out',w:0,type:'word',cat:'verb',desc:'Y-hand at ear — calling someone',motion:{t:'tap',dx:0,dy:0},hands:'right'},
  SEE:{f:[2,0,0,2,2],th:'folded',w:0,type:'word',cat:'verb',desc:'V-fingers from eyes sweep outward — see',motion:{t:'forward',dx:0,dy:-18},hands:'right'},
  LOOK:{f:[2,0,0,2,2],th:'folded',w:10,type:'word',cat:'verb',desc:'V-fingers point from eyes outward — look',motion:{t:'forward',dx:0,dy:-20},hands:'right'},
  WATCH:{f:[2,0,0,2,2],th:'folded',w:5,type:'word',cat:'verb',desc:'V-fingers sweep toward what you watch — watch',motion:{t:'arc',dx:18,dy:0},hands:'right'},
  HEAR:{f:[2,0,2,2,2],th:'folded',w:0,type:'word',cat:'verb',desc:'Index curls near ear — listening',motion:{t:'circle',r:10},hands:'right'},
  LISTEN:{f:[1,0,0,0,0],th:'up',w:0,type:'word',cat:'verb',desc:'L-hand cups behind ear — listen carefully',motion:{t:'tap',dx:0,dy:0},hands:'right'},
  MAKE:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'verb',desc:'S-hands twist on top of each other — make/create',motion:{t:'circle',r:14},hands:'both'},
  BUILD:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'verb',desc:'Flat hands stack alternately upward — building up',motion:{t:'up',dx:0,dy:-22},hands:'both'},
  CREATE:{f:[1,1,1,1,1],th:'curve',w:0,type:'word',cat:'verb',desc:'Curved hands open outward — creating something new',motion:{t:'arc',dx:22,dy:0},hands:'both'},
  TRY:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'verb',desc:'T-hands push forward with effort — try!',motion:{t:'forward',dx:0,dy:-18},hands:'both'},
  USE:{f:[2,0,0,0,0],th:'up',w:0,type:'word',cat:'verb',desc:'U-hand circles over other fist — use/using',motion:{t:'circle',r:14},hands:'right'},
  TAKE:{f:[0,0,0,0,0],th:'out',w:0,type:'word',cat:'verb',desc:'Open hand grabs inward — take',motion:{t:'in',dx:0,dy:0},hands:'right'},
  GIVE:{f:[1,1,1,1,1],th:'o',w:15,oval:true,type:'word',cat:'verb',desc:'Flat-O opens and pushes forward — give',motion:{t:'forward',dx:0,dy:-18},hands:'right'},
  BRING:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'verb',desc:'Open hands move inward toward self — bring',motion:{t:'in',dx:0,dy:0},hands:'both'},
  SEND:{f:[1,1,1,1,1],th:'o',w:15,oval:true,type:'word',cat:'verb',desc:'Flat-O flicks open and pushes away — send',motion:{t:'forward',dx:0,dy:-18},hands:'right'},
  RECEIVE:{f:[0,0,0,0,0],th:'out',w:-10,type:'word',cat:'verb',desc:'Open hands pull inward and close — receive',motion:{t:'in',dx:0,dy:8},hands:'both'},
  OPEN:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'verb',desc:'Both flat hands swing open — open!',motion:{t:'arc',dx:24,dy:0},hands:'both'},
  CLOSE:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'verb',desc:'Both flat hands swing together — close',motion:{t:'in',dx:0,dy:0},hands:'both'},
  START:{f:[2,0,2,2,2],th:'up',w:10,type:'word',cat:'verb',desc:'Index twists between fingers — start/begin',motion:{t:'circle',r:12},hands:'right'},
  STOP:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'verb',desc:'Open hand chops down onto palm — stop!',motion:{t:'chop',dx:0,dy:18},hands:'both'},
  MOVE:{f:[1,1,1,1,1],th:'o',w:0,oval:true,type:'word',cat:'verb',desc:'Bent-O hands shift from one place to another',motion:{t:'side',dx:26,dy:0},hands:'both'},
  TRAVEL:{f:[2,0,0,2,2],th:'folded',w:10,type:'word',cat:'verb',desc:'V-fingers curve and move forward — travelling',motion:{t:'arc',dx:28,dy:-8},hands:'right'},
  WIN:{f:[0,0,0,0,0],th:'out',w:0,type:'word',cat:'verb',desc:'Open hand scoops into a fist — yes, I won!',motion:{t:'up',dx:0,dy:-18},hands:'right'},
  LOSE:{f:[0,0,0,0,0],th:'out',w:-20,type:'word',cat:'verb',desc:'Open hand drops downward — lose',motion:{t:'down',dx:0,dy:20},hands:'right'},
  STUDY:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'verb',desc:'Open hand waves toward open palm — studying',motion:{t:'wave',dx:18,dy:0},hands:'both'},
  TEACH:{f:[1,1,1,1,1],th:'o',w:0,oval:true,type:'word',cat:'verb',desc:'Flat-O hands move outward from temples',motion:{t:'arc',dx:22,dy:0},hands:'both'},

  // ── NOUNS — PEOPLE & PLACES ───────────────────────────────
  PERSON:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'noun',desc:'P-hand moves down both sides — person outline',motion:{t:'down',dx:0,dy:22},hands:'both'},
  PLACE:{f:[2,0,2,2,2],th:'up',w:0,type:'word',cat:'noun',desc:'P-hands make a circle and come together — place',motion:{t:'circle',r:20},hands:'both'},
  THING:{f:[2,0,0,0,0],th:'folded',w:15,type:'word',cat:'noun',desc:'Open hand bounces to the right — thing/object',motion:{t:'side',dx:20,dy:0},hands:'right'},
  DAY:{f:[2,0,2,2,2],th:'side',w:0,type:'word',cat:'noun',desc:'Index finger arcs down like the sun setting',motion:{t:'arc',dx:20,dy:15},hands:'right'},
  NIGHT:{f:[2,0,0,0,0],th:'folded',w:-20,type:'word',cat:'noun',desc:'Bent hand arcs downward over flat arm — night',motion:{t:'down',dx:0,dy:18},hands:'both'},
  YEAR:{f:[2,2,2,2,2],th:'front',w:0,type:'word',cat:'noun',desc:'S-hands circle around each other — year',motion:{t:'circle',r:18},hands:'both'},
  OFFICE:{f:[1,1,1,1,1],th:'o',w:0,oval:true,type:'word',cat:'noun',desc:'O-hands make a box shape — office/room',motion:{t:'side',dx:22,dy:0},hands:'both'},
  MARKET:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'noun',desc:'Flat hands swing out from wrists — market/store',motion:{t:'wave',dx:20,dy:0},hands:'both'},
  HOSPITAL:{f:[2,0,0,2,2],th:'folded',w:0,type:'word',cat:'noun',desc:'H-hand draws a cross on upper arm — hospital',motion:{t:'side',dx:16,dy:0},hands:'right'},
  TABLE:{f:[2,0,0,0,0],th:'folded',w:0,type:'word',cat:'noun',desc:'Flat arm rests on other flat arm — table surface',motion:{t:'tap',dx:0,dy:8},hands:'both'},
  CHAIR:{f:[2,0,0,2,2],th:'folded',w:0,type:'word',cat:'noun',desc:'V-fingers sit on extended fingers — sitting in a chair',motion:{t:'down',dx:0,dy:12},hands:'both'},
  MONEY:{f:[1,1,1,1,1],th:'o',w:0,oval:true,type:'word',cat:'noun',desc:'Bent-O hand taps open palm — money',motion:{t:'tap',dx:0,dy:7},hands:'both'},
  AIR:{f:[0,0,0,0,0],th:'out',w:0,type:'word',cat:'noun',desc:'Open hands wave gently — air/wind',motion:{t:'wave',dx:22,dy:0},hands:'both'},
  PEN:{f:[2,0,2,2,2],th:'up',w:5,type:'word',cat:'noun',desc:'P-hand writes across palm — pen',motion:{t:'side',dx:18,dy:0},hands:'right'},
  COMPUTER:{f:[1,1,1,1,1],th:'o',w:0,oval:true,type:'word',cat:'noun',desc:'C-hand circles near elbow — computer',motion:{t:'circle',r:18},hands:'right'},
};

// ── WORD ALIASES — maps any typed variant to its sign key ──
const ALIASES={
  // question words
  'WHAT':'WHAT','WHEN':'WHEN','WHERE':'WHERE','WHY':'WHY','HOW':'HOW',
  'WHICH':'WHICH','WHO':'WHO','WHOM':'WHOM','WHOSE':'WHOSE',
  // auxiliary verbs
  'IS':'IS','ARE':'ARE','DO':'DO','DOES':'DOES','DID':'DID',
  'CAN':'CAN','COULD':'COULD','WILL':'WILL','WOULD':'WOULD','SHOULD':'SHOULD',
  // pronouns
  'I':'I','ME':'ME','YOU':'YOU','HE':'HE','HIM':'HIM',
  'SHE':'SHE','HER':'HER','IT':'IT','WE':'WE','US':'US',
  'THEY':'THEY','THEM':'THEM',
  // possessives
  'MY':'MY','YOUR':'YOUR','HIS':'HIS','ITS':'ITS','OUR':'OUR','THEIR':'THEIR',
  'MINE':'MINE','YOURS':'YOURS','HERS':'HERS','OURS':'OURS','THEIRS':'THEIRS',
  // action verbs
  'GO':'GO','COME':'COME','SIT':'SIT','STAND':'STAND','TALK':'TALK',
  'SAY':'SAY','TELL':'TELL','ASK':'ASK','ANSWER':'ANSWER','CALL':'CALL',
  'SEE':'SEE','LOOK':'LOOK','WATCH':'WATCH','HEAR':'HEAR','LISTEN':'LISTEN',
  'MAKE':'MAKE','BUILD':'BUILD','CREATE':'CREATE','TRY':'TRY','USE':'USE',
  'TAKE':'TAKE','GIVE':'GIVE','BRING':'BRING','SEND':'SEND','RECEIVE':'RECEIVE',
  'OPEN':'OPEN','CLOSE':'CLOSE','START':'START','STOP':'STOP','MOVE':'MOVE',
  'LEARN':'LEARN','TEACH':'TEACH','STUDY':'STUDY','READ':'READ','WRITE':'WRITE',
  'PLAY':'PLAY','WIN':'WIN','LOSE':'LOSE','HELP':'HELP','WORK':'WORK','TRAVEL':'TRAVEL',
  'RUN':'RUN','WALK':'WALK','EAT':'EAT','DRINK':'DRINK','SLEEP':'SLEEP',
  // nouns
  'PERSON':'PERSON','PLACE':'PLACE','THING':'THING','DAY':'DAY','NIGHT':'NIGHT',
  'YEAR':'YEAR','HOME':'HOME','SCHOOL':'SCHOOL','OFFICE':'OFFICE','MARKET':'MARKET',
  'HOSPITAL':'HOSPITAL','BOOK':'BOOK','PEN':'PEN','PHONE':'PHONE',
  'COMPUTER':'COMPUTER','TABLE':'TABLE','CHAIR':'CHAIR','MONEY':'MONEY',
  'FOOD':'FOOD','WATER':'WATER','AIR':'AIR','TIME':'TIME','NAME':'NAME',
};

// ── HAND RENDERER ─────────────────────────────────────
// CRITICAL: All colors are FLAT HEX — no url() references!
const NS='http://www.w3.org/2000/svg';
const SK='#F4A07A', SKL='#FBBF9A', SKD='#E07040', SKNL='#FDDDD8', SKS='rgba(180,80,40,0.28)';
const FB=[{x:-38,y:-18},{x:-22,y:-36},{x:-5,y:-42},{x:11,y:-38},{x:25,y:-30}];
const FL=[30,48,52,46,37], FW=[11,9,9,8,7];
const SPD=[0,960,760,530,370,200];
let speed=3, showMot=true;

function el(tag,a,p){const e=document.createElementNS(NS,tag);for(const[k,v]of Object.entries(a||{}))e.setAttribute(k,v);if(p)p.appendChild(e);return e}
function lerp(a,b,t){return a+(b-a)*t}

function drawHand(svg,sign,cx,cy,mirX,prog,prev){
  mirX=mirX||1; prog=prog||1;
  const wrist=lerp(prev?prev.w||0:0,sign.w||0,prog);
  const g=el('g',{transform:`translate(${cx},${cy}) scale(${mirX},1) rotate(${wrist})`},svg);
  // Wrist
  el('rect',{x:-22,y:18,width:44,height:30,rx:10,fill:SKD,stroke:SKS,'stroke-width':'0.8'},g);
  el('path',{d:'M -19 40 Q 0 44 19 40',fill:'none',stroke:'rgba(180,80,40,0.2)','stroke-width':'0.8'},g);
  // Palm
  el('path',{d:'M -36 16 C -40 -10 -36 -55 -30 -68 C -18 -78 18 -78 30 -68 C 36 -55 40 -10 36 16 C 24 26 -24 26 -36 16 Z',fill:SK,stroke:SKS,'stroke-width':'0.8'},g);
  // Palm lines
  el('path',{d:'M -24 -5 Q 0 -1 22 -10',fill:'none',stroke:'rgba(180,80,40,0.22)','stroke-width':'0.8'},g);
  el('path',{d:'M -26 8 Q 0 5 24 0',fill:'none',stroke:'rgba(180,80,40,0.18)','stroke-width':'0.8'},g);
  // Knuckles
  for(let i=1;i<=4;i++){
    const b=FB[i];
    el('ellipse',{cx:b.x,cy:b.y+8,rx:5,ry:3.5,fill:SKL,stroke:SKS,'stroke-width':'0.5'},g);
    el('path',{d:`M ${b.x-4} ${b.y+8} Q ${b.x} ${b.y+6} ${b.x+4} ${b.y+8}`,fill:'none',stroke:'rgba(180,80,40,0.2)','stroke-width':'0.6'},g);
  }
  const f=sign.f||[0,0,0,0,0];
  drawThumb(g,FB[0],f[0],sign);
  for(let i=1;i<5;i++) drawFinger(g,FB[i],f[i],i,FL[i],FW[i],sign);
  if(sign.curve||sign.oval){
    el('ellipse',{cx:0,cy:-28,rx:sign.curve?40:32,ry:sign.curve?42:34,fill:'none',stroke:'rgba(78,205,196,0.55)','stroke-width':'2','stroke-dasharray':'5 4'},g);
  }
}

function drawFinger(g,base,state,fi,flen,fw,sign){
  const ang=state===0?[0,0,0]:state===1?[38,55,55]:[75,88,88];
  const lens=[flen*.38,flen*.32,flen*.30];
  const isCross=(fi===1||fi===2)&&sign.cross, isV=(fi===1||fi===2)&&sign.vsplit;
  let cum=0,px=base.x,py=base.y+8;
  const cols=[SK,SKL,SKD];
  for(let ph=0;ph<3;ph++){
    cum+=ang[ph];
    const ox=isCross&&fi===2?7:isV&&fi===1?-7:isV&&fi===2?7:0;
    const ex=px+Math.sin(cum*Math.PI/180)*flen*.08+ox*.3;
    const ey=py-lens[ph]*Math.cos(cum*Math.PI/180);
    const mx=(px+ex)/2,my=(py+ey)/2,pl=Math.sqrt((ex-px)**2+(ey-py)**2)||1;
    const rot=Math.atan2(ey-py,ex-px)*180/Math.PI+90;
    el('rect',{x:mx-fw/2,y:my-pl/2,width:fw,height:pl+1,rx:fw/2,fill:cols[ph],stroke:SKS,'stroke-width':'0.5',transform:`rotate(${rot},${mx},${my})`},g);
    if(ph<2) el('ellipse',{cx:ex,cy:ey,rx:fw/2+1.5,ry:fw/2+.5,fill:cols[ph],stroke:SKS,'stroke-width':'0.5'},g);
    px=ex;py=ey;
  }
  el('ellipse',{cx:px,cy:py,rx:fw/2+1.5,ry:fw/2+2,fill:SKD,stroke:SKS,'stroke-width':'0.5'},g);
  el('ellipse',{cx:px,cy:py-1.5,rx:fw/2-.5,ry:fw/2+.5,fill:SKNL,stroke:'rgba(200,150,140,0.35)','stroke-width':'0.4'},g);
}

function drawThumb(g,base,state,sign){
  const fw=11,tp=sign.th||'side',bx=base.x,by=base.y;
  const m={side:[bx-9,by+18],front:[bx-7,by+16],folded:[bx+11,by+22],up:[bx-14,by-12],
    out:[bx-16,by+10],curve:[bx-11,by+14],o:[bx+2,by+7],oval:[bx+2,by+7],
    touch:[bx+9,by-4],touch_idx:[bx+9,by-4],between:[bx+13,by+11],between_if:[bx+13,by+11],
    under2:[bx+13,by+11],under3:[bx+13,by+11],under:[bx+15,by+15],point:[bx-7,by+9],point2:[bx-7,by+9]};
  const[tx,ty]=m[tp]||[bx-9,by+18];
  let px=bx,py=by+8;
  for(let ph=0;ph<2;ph++){
    const ex=px+(tx-bx)*(ph+1)/2*.82,ey=py+(ty-by+8)*(ph+1)/2*.82;
    const mx=(px+ex)/2,my=(py+ey)/2,pl=Math.sqrt((ex-px)**2+(ey-py)**2)||1;
    const rot=Math.atan2(ey-py,ex-px)*180/Math.PI+90;
    el('rect',{x:mx-(fw+1)/2,y:my-pl/2,width:fw+2,height:pl+2,rx:(fw+2)/2,fill:ph===0?SK:SKL,stroke:SKS,'stroke-width':'0.5',transform:`rotate(${rot},${mx},${my})`},g);
    if(ph===0) el('ellipse',{cx:ex,cy:ey,rx:fw/2+2,ry:fw/2+1,fill:SK,stroke:SKS,'stroke-width':'0.5'},g);
    px=ex;py=ey;
  }
  el('ellipse',{cx:px,cy:py,rx:fw/2+2,ry:fw/2+2.5,fill:SKD,stroke:SKS,'stroke-width':'0.5'},g);
  el('ellipse',{cx:px,cy:py-2,rx:fw/2,ry:fw/2+1,fill:SKNL,stroke:'rgba(200,150,140,0.35)','stroke-width':'0.4'},g);
}

function drawMotion(svg,motion,cx,cy,prog){
  const t=motion.t,mx=cx,my=cy-52;let d='';
  if(['arc','forward','side'].includes(t)){const dx=motion.dx||0,dy=motion.dy||0;d=`M${mx},${my} Q${mx+dx*.5},${my+dy*.5-16} ${mx+dx},${my+dy}`}
  else if(t==='circle'){const r=motion.r||20;d=`M${mx-r},${my} a${r},${r} 0 1,1 ${r*2},0 a${r},${r} 0 1,1 ${-r*2},0`}
  else if(['up','down','flip','chop'].includes(t)){const dy=motion.dy||22;d=`M${mx},${my} L${mx},${my+dy}`}
  else if(['wave','shake','wiggle'].includes(t)){const dx=motion.dx||14;d=`M${mx-dx},${my} Q${mx},${my-9} ${mx+dx},${my}`}
  else if(['tap','nod','snap','rock','squeeze'].includes(t)){const dy=motion.dy||9;d=`M${mx},${my} L${mx},${my+dy}`}
  else if(t==='swap'){d=`M${mx-16},${my} C${mx-16},${my-20} ${mx+16},${my-20} ${mx+16},${my}`}
  else if(t==='in'){d=`M${mx-32},${my} L${mx},${my}`}
  else if(t==='z'){d=`M${mx-13},${my} L${mx+13},${my} L${mx-13},${my+18} L${mx+13},${my+18}`}
  else{d=`M${mx},${my} L${mx+22},${my}`}
  if(!d)return;
  el('path',{d,fill:'none',stroke:'#4ECDC4','stroke-width':'2.5','stroke-dasharray':'7 5',opacity:'0.7','stroke-linecap':'round'},svg);
  const dot=el('circle',{r:'5',fill:'#FF6B6B',opacity:'0.85'},svg);
  try{
    const tp=document.createElementNS(NS,'path');tp.setAttribute('d',d);
    document.body.appendChild(tp);
    const len=tp.getTotalLength();
    const pt=tp.getPointAtLength(len*(prog||1));
    dot.setAttribute('cx',pt.x);dot.setAttribute('cy',pt.y);
    document.body.removeChild(tp);
  }catch(e){dot.setAttribute('cx',mx);dot.setAttribute('cy',my)}
  el('circle',{cx:dot.getAttribute('cx'),cy:dot.getAttribute('cy'),r:'9',fill:'none',stroke:'#FF6B6B','stroke-width':'1.5',opacity:'0.25'},svg);
}

function renderSign(svg,sign,prog,prev){
  svg.innerHTML='';
  prog=prog||1;
  if(mirrorOn){
    const mg=document.createElementNS('http://www.w3.org/2000/svg','g');
    mg.setAttribute('transform','scale(-1,1) translate(-360,0)');
    svg.appendChild(mg);
    if(sign.hands==='both'){drawHand(mg,sign,130,200,-1,prog,prev);drawHand(mg,sign,230,200,1,prog,prev);}
    else{drawHand(mg,sign,180,200,1,prog,prev);if(showMot&&sign.motion)drawMotion(mg,sign.motion,180,200,prog);}
  } else if(sign.hands==='both'){
    drawHand(svg,sign,130,200,-1,prog,prev);
    drawHand(svg,sign,230,200,1,prog,prev);
  } else {
    drawHand(svg,sign,180,200,1,prog,prev);
    if(showMot&&sign.motion) drawMotion(svg,sign.motion,180,200,prog);
  }
}

// ── ANIMATION ENGINE ───────────────────────────────────
let aT=null,sT=null,queue=[],qi=0;

function setSpd(s,btn){speed=s;document.querySelectorAll('.sb').forEach(b=>b.classList.remove('act'));btn.classList.add('act')}
function upCnt(){const r=200-document.getElementById('txt').value.length;document.getElementById('chl').textContent=r+' left'}

function tokenize(txt){
  const toks=[];
  for(const w of txt.trim().toUpperCase().split(/\s+/)){
    if(!w)continue;
    // 1. Direct match in sign data
    if(S[w]){toks.push({key:w,sign:S[w]});continue;}
    // 2. Alias lookup (e.g. "i" -> I sign, "me" -> ME sign)
    if(ALIASES[w]&&S[ALIASES[w]]){toks.push({key:ALIASES[w],sign:S[ALIASES[w]]});continue;}
    // 3. Underscore compound (e.g. GOOD_MORNING)
    const uw=w.replace(/\s+/g,'_');
    if(S[uw]){toks.push({key:uw,sign:S[uw]});continue;}
    // 4. Fallback: spell it letter by letter
    for(const ch of w)if(S[ch])toks.push({key:ch,sign:S[ch]});
  }
  return toks;
}

function startSign(){
  const txt=document.getElementById('txt').value.trim();
  if(!txt)return;
  if(aT)clearTimeout(aT);if(sT)clearTimeout(sT);
  queue=tokenize(txt);if(!queue.length)return;
  qi=0;
  document.getElementById('idlw').style.display='none';
  document.getElementById('sstage').classList.add('play');
  renderQ();setP(0);signNext();
}

function signNext(){
  if(qi>=queue.length){
    document.getElementById('cbadge').textContent='Done! 🎉';
    document.getElementById('sstage').classList.remove('play');
    setP(1);return;
  }
  const tok=queue[qi];
  document.getElementById('cbadge').textContent=tok.key.replace(/_/g,' ');
  document.getElementById('prt').textContent=(qi+1)+'/'+queue.length;
  setP(qi/queue.length);renderQ();
  animSign(document.getElementById('hc'),tok.sign,null,()=>{qi++;sT=setTimeout(signNext,SPD[speed]*.22)});
}

function animSign(svg,sign,prev,cb){
  const dur=SPD[speed],start=performance.now();
  function tick(now){
    const t=Math.min((now-start)/dur,1);
    renderSign(svg,sign,t,prev);
    if(t<1)requestAnimationFrame(tick);
    else if(cb)aT=setTimeout(cb,dur*.16);
  }
  requestAnimationFrame(tick);
}

function setP(p){document.getElementById('pfill').style.width=(p*100)+'%'}
function renderQ(){
  const w=document.getElementById('qrow');w.innerHTML='';
  queue.forEach((t,i)=>{
    const c=document.createElement('div');
    c.className='qchip'+(i===qi?' act':i<qi?' dn':'');
    c.textContent=t.key.replace(/_/g,' ');w.appendChild(c);
  });
}

function startVoice(){
  const btn=document.getElementById('vbtn');
  if(!('webkitSpeechRecognition' in window||'SpeechRecognition' in window)){alert('Voice input needs Chrome!');return}
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  const r=new SR();r.lang='en-US';r.interimResults=false;
  btn.classList.add('on');btn.textContent='🔴';
  r.onresult=e=>{document.getElementById('txt').value=e.results[0][0].transcript;upCnt()};
  r.onend=()=>{btn.classList.remove('on');btn.textContent='🎤'};
  r.start();
}

// ── QUIZ ───────────────────────────────────────────────
let qMode='s2w',qC=0,qT=0,qStr=0,qSc=0,qKey='',qLk=false,qCT=null;
const QP=Object.keys(S).filter(k=>S[k].type==='word');

function setQM(m,btn){qMode=m;document.querySelectorAll('.qmb').forEach(b=>b.classList.remove('act'));btn.classList.add('act');nextQ()}

function nextQ(){
  if(qCT)clearInterval(qCT);
  qLk=false;
  document.getElementById('nxtb').style.display='none';
  document.getElementById('hb').style.display='none';
  document.getElementById('qcd').textContent='';
  qKey=QP[Math.floor(Math.random()*QP.length)];
  const sign=S[qKey];
  const opts=new Set([qKey]);while(opts.size<4)opts.add(QP[Math.floor(Math.random()*QP.length)]);
  const sh=[...opts].sort(()=>Math.random()-.5);
  const svg=document.getElementById('qhc');svg.innerHTML='';
  if(qMode==='s2w'){
    renderSign(svg,sign,1,null);
    document.getElementById('qpro').textContent='👀 What word is this sign?';
    renderOpts(sh);
  }else if(qMode==='w2s'){
    document.getElementById('qpro').textContent='📝 Which sign means: '+qKey.replace(/_/g,' ')+'?';
    document.getElementById('qcd').textContent='3';let cd=3;
    qCT=setInterval(()=>{cd--;document.getElementById('qcd').textContent=cd>0?cd:'';
      if(cd<=0){clearInterval(qCT);renderSign(svg,sign,1,null)}},1000);
    renderOpts(sh);
  }else{
    renderSign(svg,sign,1,null);
    document.getElementById('qpro').textContent='✏️ Type what this sign means:';
    const c=document.getElementById('qopts');c.style.display='block';c.innerHTML='';
    const rw=document.createElement('div');rw.className='sprow';
    rw.innerHTML=`<input class="spin" id="spin" placeholder="Type here…" autocomplete="off"><button class="spck" onclick="chkSpell()">✓ Check</button>`;
    c.appendChild(rw);
    setTimeout(()=>{const si=document.getElementById('spin');if(si)si.onkeydown=e=>{if(e.key==='Enter')chkSpell()}},50);
  }
}

function renderOpts(keys){
  const c=document.getElementById('qopts');c.style.display='grid';c.innerHTML='';
  keys.forEach(k=>{const b=document.createElement('button');b.className='obtn';b.textContent=k.replace(/_/g,' ');b.onclick=()=>chkAns(k,b);c.appendChild(b)});
}
function chkAns(chosen,btn){
  if(qLk)return;qLk=true;qT++;
  const ok=chosen===qKey;
  if(ok){qC++;qStr++;qSc+=10+qStr*2;}else{qStr=0;}
  // ── Color all buttons immediately (correct=green, wrong=red) ──
  document.querySelectorAll('.obtn').forEach(b=>{
    b.classList.add('lk');
    if(b.textContent===qKey.replace(/_/g,' ')){b.classList.add('ok');}
    else if(b===btn&&!ok){b.classList.add('ng');}
  });
  shHint(ok);updQ();document.getElementById('nxtb').style.display='block';
  // ── Gamification ──
  roundTotal++;
  if(ok){roundCorrect++;playCorrect();launchConfetti();mascotReact('correct');addXP(10+qStr*2);}
  else{playWrong();mascotReact('wrong');loseLife();}
  checkBadges();
  if(roundTotal>0&&roundTotal%5===0)showStarRating();
}
function chkSpell(){
  const inp=document.getElementById('spin');if(!inp)return;
  const val=inp.value.trim().toUpperCase().replace(/\s+/g,'_');if(!val)return;
  const ok=val===qKey||val.replace(/_/g,' ')===qKey.replace(/_/g,' ');
  if(!qLk){
    qLk=true;qT++;
    if(ok){qC++;qStr++;qSc+=10+qStr*2;}else{qStr=0;}
    inp.style.borderColor=ok?'var(--grn)':'var(--coral)';inp.disabled=true;
    shHint(ok);updQ();document.getElementById('nxtb').style.display='block';
    roundTotal++;
    if(ok){roundCorrect++;playCorrect();launchConfetti();mascotReact('correct');addXP(12);}
    else{playWrong();mascotReact('wrong');loseLife();}
    checkBadges();
  }
}
function shHint(ok){
  const h=document.getElementById('hb');h.style.display='';h.className='hb '+(ok?'ok':'ng');
  h.textContent=ok?'✅ Correct! +'+(10+(ok?qStr:0)*2):'❌ '+qKey.replace(/_/g,' ');
}
function updQ(){
  document.getElementById('qc').textContent=qC;
  document.getElementById('qt').textContent=qT;
  document.getElementById('qp').textContent=qT>0?Math.round(qC/qT*100)+'%':'—';
  document.getElementById('strn').textContent=qStr;
  document.getElementById('qsc').textContent='Score: '+qSc;
}

// ── LEARN ──────────────────────────────────────────────
const LCATS={
  '👋 Greetings':['HELLO','HI','BYE','GOOD_MORNING','GOOD_NIGHT','THANK','SORRY','PLEASE','WELCOME','YES','NO','HOW_ARE_YOU','EXCUSE_ME','NAME'],
  '❤️ Emotions':['LOVE','HAPPY','SAD','ANGRY','SCARED','EXCITED','TIRED','GOOD','BAD','FUNNY','SURPRISED','I_LOVE_YOU'],
  '❓ Questions':['WHAT','WHEN','WHERE','WHY','HOW','WHICH','WHO','WHOM','WHOSE'],
  '🔤 Pronouns':['I','ME','YOU','HE','HIM','SHE','HER','IT','WE','US','THEY','THEM','MY','YOUR','HIS','ITS','OUR','THEIR','MINE','YOURS','HERS','OURS','THEIRS'],
  '⚡ Aux Verbs':['IS','ARE','DO','DOES','DID','CAN','COULD','WILL','WOULD','SHOULD'],
  '🏃 Action Verbs':['GO','COME','EAT','DRINK','SLEEP','WALK','RUN','SIT','STAND','TALK','SAY','TELL','ASK','ANSWER','CALL','SEE','LOOK','WATCH','HEAR','LISTEN','MAKE','BUILD','CREATE','TRY','USE','TAKE','GIVE','BRING','SEND','RECEIVE','OPEN','CLOSE','START','STOP','MOVE','LEARN','TEACH','STUDY','READ','WRITE','PLAY','WIN','LOSE','HELP','WORK','TRAVEL'],
  '🏠 Nouns':['PERSON','PLACE','THING','DAY','NIGHT','YEAR','HOME','SCHOOL','OFFICE','MARKET','HOSPITAL','BOOK','PEN','PHONE','COMPUTER','TABLE','CHAIR','MONEY','FOOD','WATER','AIR','TIME','NAME'],
  '👨‍👩‍👧 People':['BOY','GIRL','MAN','WOMAN','BABY','CHILD','MOTHER','FATHER','SISTER','BROTHER','FRIEND','FAMILY','TEACHER','DOCTOR','GRANDMA','GRANDPA'],
  '🍽️ Food':['FOOD','EAT','DRINK','WATER','MILK','APPLE','BANANA','PIZZA','CAKE','ICE_CREAM','CHOCOLATE','COFFEE','HOT','COLD','SWEET','HUNGRY'],
  '📅 Daily Life':['SLEEP','WAKE_UP','BRUSH_TEETH','SHOWER','WALK','RUN','READ','WRITE','PLAY','WORK','HOME','SCHOOL','BOOK','PENCIL','PHONE','MUSIC','CAR','TIME'],
  '🎨 Colors':['RED','BLUE','GREEN','YELLOW','WHITE','BLACK','PURPLE'],
  '🔢 Numbers':['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN'],
};
const LK=Object.keys(S).filter(k=>S[k].type==='word');
let lIdx=0,selKey='HELLO';

function buildLSB(){
  const sb=document.getElementById('lsb');sb.innerHTML='';
  for(const[cat,words]of Object.entries(LCATS)){
    const sec=document.createElement('div');sec.className='cgrp';
    sec.innerHTML=`<div class="chd">${cat}</div>`;
    const chips=document.createElement('div');chips.className='wcps';
    words.filter(w=>S[w]).forEach(w=>{
      const c=document.createElement('div');c.className='wcp'+(w===selKey?' sl':'');c.id='wc-'+w;
      c.textContent=w.replace(/_/g,' ');c.onclick=()=>selLearn(w);chips.appendChild(c);
    });
    sec.appendChild(chips);sb.appendChild(sec);
  }
}
function selLearn(key){
  selKey=key;lIdx=LK.indexOf(key);
  document.querySelectorAll('.wcp').forEach(c=>c.classList.remove('sl'));
  const el2=document.getElementById('wc-'+key);
  if(el2){el2.classList.add('sl');el2.scrollIntoView({block:'nearest'})}
  const sign=S[key];if(!sign)return;
  document.getElementById('lidl').style.display='none';
  document.getElementById('lnm').textContent=key.replace(/_/g,' ');
  document.getElementById('ldc').textContent=sign.desc||'No description.';
  const bw=document.getElementById('lbdg');bw.innerHTML='';
  [[`bt`,sign.type.toUpperCase()],[`bh`,sign.hands==='both'?'🙌 Two Hands':'✋ One Hand'],
   ...(sign.motion?[[`bm`,'🌀 '+sign.motion.t]]:[])
  ].forEach(([cls,txt])=>{const b=document.createElement('span');b.className='bdg '+cls;b.textContent=txt;bw.appendChild(b)});
  const svg=document.getElementById('lhc');svg.innerHTML='';
  renderSign(svg,sign,1,null);
}
function lPlay(){const sign=S[selKey];if(!sign)return;animSign(document.getElementById('lhc'),sign,null,()=>selLearn(selKey))}
function lPrev(){selLearn(LK[Math.max(0,lIdx-1)])}
function lNext(){selLearn(LK[Math.min(LK.length-1,lIdx+1)])}

// ── TABS ───────────────────────────────────────────────
function swTab(id,btn){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('act'));
  document.querySelectorAll('.nb:not(#dm-btn)').forEach(b=>b.classList.remove('act'));
  document.getElementById('panel-'+id).classList.add('act');
  btn.classList.add('act');
  if(id==='quiz'&&qT===0)nextQ();
  if(id==='learn'){
    // small delay so DOM is ready
    setTimeout(()=>{buildLSB();selLearn(selKey);},30);
  }
}
nextQ();

// ── DARK MODE ──────────────────────────────────────────
function toggleDark(){
  const isDark = document.body.classList.toggle('dark');
  document.getElementById('dm-btn').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('sv-dark', isDark ? '1' : '0');
}
(function(){
  if(localStorage.getItem('sv-dark') === '1'){
    document.body.classList.add('dark');
    window.addEventListener('DOMContentLoaded', function(){
      var b = document.getElementById('dm-btn');
      if(b) b.textContent = '☀️';
    });
  }
})();



// ══════════════════════════════════════════════════════════════
// SIGNVERSE v8 — GAMIFICATION + INTERACTIVE LEARN ENGINE
// ══════════════════════════════════════════════════════════════

// ── SOUND ENGINE (Web Audio API — no library) ────────────────
const AC = new (window.AudioContext||window.webkitAudioContext)();
function beep(freq,dur,type,vol){
  try{
    const o=AC.createOscillator(), g=AC.createGain();
    o.connect(g);g.connect(AC.destination);
    o.frequency.value=freq; o.type=type||'sine';
    g.gain.setValueAtTime(vol||0.3,AC.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,AC.currentTime+dur);
    o.start(); o.stop(AC.currentTime+dur);
  }catch(e){}
}
function playCorrect(){
  beep(523,0.12,'sine',0.3); setTimeout(()=>beep(659,0.12,'sine',0.3),100); setTimeout(()=>beep(784,0.2,'sine',0.3),200);
}
function playWrong(){
  beep(200,0.15,'sawtooth',0.25); setTimeout(()=>beep(150,0.2,'sawtooth',0.2),120);
}
function playLevelUp(){
  [523,587,659,698,784,880].forEach((f,i)=>setTimeout(()=>beep(f,0.15,'sine',0.3),i*80));
}

// ── CONFETTI ENGINE ─────────────────────────────────────────
const confCvs=document.getElementById('confetti-canvas');
const confCtx=confCvs.getContext('2d');
let confetti=[], confRunning=false;
const CONF_COLORS=['#FF6B6B','#4ECDC4','#FFD93D','#C3A6FF','#6BCB77','#FFB347','#FF85A1'];
function launchConfetti(){
  confCvs.width=window.innerWidth; confCvs.height=window.innerHeight;
  confetti=[];
  for(let i=0;i<120;i++){
    confetti.push({
      x:Math.random()*confCvs.width, y:-10,
      w:Math.random()*10+6, h:Math.random()*6+4,
      color:CONF_COLORS[Math.floor(Math.random()*CONF_COLORS.length)],
      rot:Math.random()*360, spin:Math.random()*8-4,
      vx:Math.random()*4-2, vy:Math.random()*4+3,
      alpha:1
    });
  }
  if(!confRunning){confRunning=true;animConf();}
}
function animConf(){
  confCtx.clearRect(0,0,confCvs.width,confCvs.height);
  confetti=confetti.filter(c=>c.alpha>0.05);
  confetti.forEach(c=>{
    c.x+=c.vx; c.y+=c.vy; c.rot+=c.spin; c.vy+=0.1;
    if(c.y>confCvs.height*0.75)c.alpha-=0.025;
    confCtx.save();confCtx.globalAlpha=c.alpha;
    confCtx.translate(c.x,c.y);confCtx.rotate(c.rot*Math.PI/180);
    confCtx.fillStyle=c.color;
    confCtx.fillRect(-c.w/2,-c.h/2,c.w,c.h);
    confCtx.restore();
  });
  if(confetti.length>0)requestAnimationFrame(animConf);
  else confRunning=false;
}

// ── MASCOT ──────────────────────────────────────────────────
let mascotTimer=null;
function mascotReact(type){
  const face=document.getElementById('mascot-face');
  const bubble=document.getElementById('mascot-bubble');
  const reactions={
    correct:['🤩','Amazing! 🎉','You got it! ⭐','Awesome! 🔥','Perfect! 🤙'],
    wrong:['😢','Oops! Try again!','Almost there! 💪','Don\'t give up! 🤟'],
    levelup:['🥳','LEVEL UP! 🏆'],
    idle:['🤟','','','']
  };
  const r=reactions[type]||reactions.idle;
  face.textContent=r[0];
  bubble.textContent=r[Math.floor(Math.random()*(r.length-1))+1];
  bubble.style.display='block';
  if(mascotTimer)clearTimeout(mascotTimer);
  mascotTimer=setTimeout(()=>{bubble.style.display='none';face.textContent='🤟';},2500);
}

// ── XP & LEVEL SYSTEM ───────────────────────────────────────
const LEVELS=[
  {name:'Beginner',icon:'⭐',xpNeeded:50},
  {name:'Learner',icon:'🌟',xpNeeded:150},
  {name:'Explorer',icon:'💫',xpNeeded:300},
  {name:'Expert',icon:'🏅',xpNeeded:500},
  {name:'Master',icon:'🏆',xpNeeded:Infinity}
];
let xp=parseInt(localStorage.getItem('sv-xp')||'0');
let curLevel=parseInt(localStorage.getItem('sv-level')||'0');

function updateXPBar(){
  const lv=LEVELS[Math.min(curLevel,LEVELS.length-1)];
  const prevXP=curLevel>0?LEVELS[curLevel-1].xpNeeded:0;
  const pct=Math.min(100,((xp-prevXP)/(lv.xpNeeded-prevXP))*100)||0;
  document.getElementById('xp-fill').style.width=pct+'%';
  document.getElementById('xp-val').textContent=xp+' / '+lv.xpNeeded;
  document.getElementById('lvl-badge').textContent=lv.icon+' '+lv.name;
}

function addXP(amount){
  xp+=amount;
  localStorage.setItem('sv-xp',xp);
  const lv=LEVELS[Math.min(curLevel,LEVELS.length-1)];
  if(xp>=lv.xpNeeded&&curLevel<LEVELS.length-1){
    curLevel++;
    localStorage.setItem('sv-level',curLevel);
    const newLv=LEVELS[curLevel];
    document.getElementById('lvlup-title').textContent=newLv.icon+' Level Up!';
    document.getElementById('lvlup-sub').textContent='You are now a '+newLv.name+'!';
    document.getElementById('lvlup-modal').classList.add('show');
    playLevelUp(); mascotReact('levelup');
  }
  updateXPBar();
}

// ── LIVES SYSTEM ─────────────────────────────────────────────
let lives=3, maxLives=3;
function renderLives(){
  document.getElementById('lives-row').textContent='❤️'.repeat(lives)+'🖤'.repeat(maxLives-lives);
}
function loseLife(){
  if(lives>0){lives--;renderLives();}
  if(lives===0){setTimeout(()=>{
    lives=3;renderLives();
    alert('Out of hearts! 💔 Starting over — you got this! 🤟');
  },800);}
}

// ── STAR RATING ──────────────────────────────────────────────
let roundCorrect=0,roundTotal=0;
function showStarRating(){
  const pct=roundTotal>0?(roundCorrect/roundTotal):0;
  const stars=pct>=0.8?3:pct>=0.5?2:1;
  const el=document.getElementById('star-display');
  el.textContent=['⭐','⭐⭐','⭐⭐⭐'][stars-1];
  el.style.display='flex';
  setTimeout(()=>el.style.display='none',2000);
}

// ── BADGE SYSTEM ─────────────────────────────────────────────
const earnedBadges=new Set(JSON.parse(localStorage.getItem('sv-badges')||'[]'));
const BADGE_DEFS=[
  {id:'first',label:'First Sign! 🎯',check:()=>qT>=1},
  {id:'streak5',label:'5 Streak! 🔥',check:()=>qStr>=5},
  {id:'streak10',label:'10 Streak! 🏆',check:()=>qStr>=10},
  {id:'perfect',label:'Perfect Round! ⭐',check:()=>roundTotal>=5&&roundCorrect===roundTotal},
  {id:'master',label:'Quiz Master! 👑',check:()=>qC>=50},
];
function checkBadges(){
  BADGE_DEFS.forEach(b=>{
    if(!earnedBadges.has(b.id)&&b.check()){
      earnedBadges.add(b.id);
      localStorage.setItem('sv-badges',JSON.stringify([...earnedBadges]));
      showBadge(b.label);
    }
  });
}
function showBadge(label){
  const p=document.getElementById('badge-popup');
  document.getElementById('badge-txt').textContent=label;
  p.classList.add('show');
  setTimeout(()=>p.classList.remove('show'),3000);
}

// ── PATCH checkAns to add all gamification ───────────────────
// Gamification integrated directly into chkAns and chkSpell above

// ══════════════════════════════════════════════════════════════
// LEARN TAB — ALL NEW FEATURES
// ══════════════════════════════════════════════════════════════
let learnMode='normal', mirrorOn=false, lSpeed=3;
let learnedSigns=new Set(JSON.parse(localStorage.getItem('sv-learned')||'[]'));
let favSigns=new Set(JSON.parse(localStorage.getItem('sv-favs')||'[]'));
let recentSigns=JSON.parse(localStorage.getItem('sv-recent')||'[]');
let lZoomed=false;

// CATEGORY EMOJIS for word chips
const CAT_EMOJI={
  HELLO:'👋',HI:'👋',BYE:'👋',THANK:'🙏',SORRY:'😔',PLEASE:'🙏',WELCOME:'🤗',
  LOVE:'❤️',HAPPY:'😊',SAD:'😢',ANGRY:'😠',SCARED:'😱',EXCITED:'🤩',TIRED:'😴',
  GOOD:'👍',BAD:'👎',FUNNY:'😄',SURPRISED:'😲',I_LOVE_YOU:'🤟',
  BOY:'👦',GIRL:'👧',MAN:'👨',WOMAN:'👩',BABY:'👶',CHILD:'🧒',
  MOTHER:'👩',FATHER:'👨',SISTER:'👧',BROTHER:'👦',FRIEND:'🤝',FAMILY:'👨‍👩‍👧',
  TEACHER:'👩‍🏫',DOCTOR:'👨‍⚕️',GRANDMA:'👵',GRANDPA:'👴',
  FOOD:'🍽️',EAT:'🍴',DRINK:'🥤',WATER:'💧',MILK:'🥛',APPLE:'🍎',BANANA:'🍌',
  PIZZA:'🍕',CAKE:'🎂',ICE_CREAM:'🍦',CHOCOLATE:'🍫',COFFEE:'☕',
  HOT:'🔥',COLD:'🧊',SWEET:'🍬',HUNGRY:'🤤',
  SLEEP:'😴',WAKE_UP:'⏰',BRUSH_TEETH:'🪥',SHOWER:'🚿',WALK:'🚶',RUN:'🏃',
  READ:'📖',WRITE:'✍️',PLAY:'🎮',WORK:'💼',HOME:'🏠',SCHOOL:'🏫',
  BOOK:'📚',PENCIL:'✏️',PHONE:'📱',MUSIC:'🎵',CAR:'🚗',TIME:'⏰',
  HELP:'🆘',MORE:'➕',STOP:'🛑',WAIT:'⏳',KNOW:'💡',UNDERSTAND:'💡',
  COME:'👈',GO:'👉',LEARN:'📚',SIGN:'🤟',DEAF:'👂',
  RED:'🔴',BLUE:'🔵',GREEN:'🟢',YELLOW:'🟡',WHITE:'⚪',BLACK:'⚫',PURPLE:'🟣',
  ONE:'1️⃣',TWO:'2️⃣',THREE:'3️⃣',FOUR:'4️⃣',FIVE:'5️⃣',
  SIX:'6️⃣',SEVEN:'7️⃣',EIGHT:'8️⃣',NINE:'9️⃣',TEN:'🔟',
};

// Enhanced buildLSB with emoji hints (replaces the original)
function buildLSB(){
  const sb=document.getElementById('lsb');
  if(!sb)return;
  sb.innerHTML='';
  for(const[cat,words]of Object.entries(LCATS)){
    const sec=document.createElement('div');sec.className='cgrp';
    sec.innerHTML=`<div class="chd">${cat}</div>`;
    const chips=document.createElement('div');chips.className='wcps';
    words.filter(w=>S[w]).forEach(w=>{
      const c=document.createElement('div');
      const isFav=favSigns&&favSigns.has(w);
      const isLearned=learnedSigns&&learnedSigns.has(w);
      c.className='wcp'+(w===selKey?' sl':'')+(isFav?' faved':'');
      c.id='wc-'+w;
      const emoji=CAT_EMOJI[w]||'';
      c.innerHTML=`${emoji} ${w.replace(/_/g,' ')}<span class="fav-dot">⭐</span>`;
      if(isLearned)c.style.opacity='.75';
      c.onclick=()=>selLearn(w);
      chips.appendChild(c);
    });
    sec.appendChild(chips);sb.appendChild(sec);
  }
  updateProgressRing();
  buildRecentSection();
  buildDailySign();
}

// Enhanced selLearn — tracks recents, learned, fav
function selLearn(key){
  selKey=key; lIdx=LK.indexOf(key);
  document.querySelectorAll('.wcp').forEach(c=>c.classList.remove('sl'));
  const el2=document.getElementById('wc-'+key);
  if(el2){el2.classList.add('sl');el2.scrollIntoView({block:'nearest'});}
  const sign=S[key]; if(!sign)return;
  // hide idle
  const lidl=document.getElementById('lidl');if(lidl)lidl.style.display='none';
  // update name/desc/badges
  const lnm=document.getElementById('lnm');if(lnm)lnm.textContent=key.replace(/_/g,' ');
  const ldc=document.getElementById('ldc');if(ldc)ldc.textContent=sign.desc||'No description.';
  const bw=document.getElementById('lbdg');
  if(bw){bw.innerHTML='';
    [[`bt`,sign.type.toUpperCase()],[`bh`,sign.hands==='both'?'🙌 Two Hands':'✋ One Hand'],
     ...(sign.motion?[[`bm`,'🌀 '+sign.motion.t]]:[])
    ].forEach(([cls,txt])=>{const b=document.createElement('span');b.className='bdg '+cls;b.textContent=txt;bw.appendChild(b);});
  }
  // draw hand
  const svg=document.getElementById('lhc');if(svg){svg.innerHTML='';renderSign(svg,sign,1,null);}
  // track learned
  if(learnedSigns){learnedSigns.add(key);localStorage.setItem('sv-learned',JSON.stringify([...learnedSigns]));}
  // track recent
  if(recentSigns){
    recentSigns=recentSigns.filter(k=>k!==key);
    recentSigns.unshift(key);
    if(recentSigns.length>5)recentSigns.pop();
    localStorage.setItem('sv-recent',JSON.stringify(recentSigns));
    buildRecentSection();
  }
  updateProgressRing();
  // update fav btn
  const fb=document.getElementById('fav-btn');
  if(fb)fb.textContent=favSigns&&favSigns.has(key)?'💛':'⭐';
}

function updateProgressRing(){
  const total=LK.length;
  const done=learnedSigns.size;
  const pct=total>0?done/total:0;
  const circ=2*Math.PI*22;
  const offset=circ-(pct*circ);
  const arc=document.getElementById('ring-arc');
  if(arc){arc.setAttribute('stroke-dashoffset',offset.toFixed(1));}
  const rc=document.getElementById('ring-count');const rt=document.getElementById('ring-total');
  if(rc)rc.textContent=done;if(rt)rt.textContent=total;
}

function buildRecentSection(){
  const sec=document.getElementById('recent-section');
  const row=document.getElementById('recent-row');
  if(!sec||!row)return;
  if(recentSigns.length===0){sec.style.display='none';return;}
  sec.style.display='block';row.innerHTML='';
  recentSigns.slice(0,5).forEach(k=>{
    const c=document.createElement('div');c.className='recent-chip';
    c.textContent=(CAT_EMOJI[k]||'')+' '+k.replace(/_/g,' ');
    c.onclick=()=>selLearn(k);row.appendChild(c);
  });
}

function buildDailySign(){
  const keys=Object.keys(S).filter(k=>S[k].type==='word');
  const idx=Math.floor(new Date().getDate())%keys.length;
  const key=keys[idx];const sign=S[key];
  document.getElementById('daily-word').textContent=key.replace(/_/g,' ');
  document.getElementById('daily-desc').textContent=sign.desc||'';
  document.getElementById('daily-emoji').textContent=CAT_EMOJI[key]||'📅';
}
function playDailySign(){
  const keys=Object.keys(S).filter(k=>S[k].type==='word');
  const idx=Math.floor(new Date().getDate())%keys.length;
  selLearn(keys[idx]);
  setLearnMode('normal',document.getElementById('lt-normal'));
}

// LEARN MODE SWITCHER
function setLearnMode(mode,btn){
  learnMode=mode;
  document.querySelectorAll('.ltool-btn:not(#lt-mirror):not(#zoom-btn)').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById('learn-normal').style.display=mode==='normal'?'':'none';
  document.getElementById('learn-flash').style.display=mode==='flash'?'block':'none';
  document.getElementById('learn-game').style.display=mode==='game'?'block':'none';
  if(mode==='flash')startFlashcard();
  if(mode==='game')startCatGame();
}

// MIRROR MODE
function toggleMirror(btn){
  mirrorOn=!mirrorOn;btn.classList.toggle('on',mirrorOn);
  if(selKey)selLearn(selKey);
}

// Mirror mode is handled inside renderSign directly
// (no override needed — mirror flag checked at call time)

// LEARN SPEED
function setLSpeed(s,btn){lSpeed=s;document.querySelectorAll('.learn-toolbar .ltool-btn:not(#lt-mirror):not(#lt-normal):not(#lt-flash):not(#lt-game):not(#zoom-btn)').forEach(b=>b.classList.remove('on'));btn.classList.add('on');const old=SPD_MS[speed];SPD_MS[speed]=SPD_MS[s];}

// ZOOM
function toggleZoom(btn){
  lZoomed=!lZoomed;btn.classList.toggle('on',lZoomed);
  const lhc=document.getElementById('lhc');
  lhc.style.transform=lZoomed?'scale(1.5)':'scale(1)';
  lhc.style.transformOrigin='center top';
}

// FAVOURITE
function toggleFav(){
  if(!selKey)return;
  const fb=document.getElementById('fav-btn');
  if(favSigns.has(selKey)){favSigns.delete(selKey);fb.textContent='⭐';}
  else{favSigns.add(selKey);fb.textContent='💛';showBadge&&showBadge('Favourited: '+selKey.replace(/_/g,' ')+' 💛');}
  localStorage.setItem('sv-favs',JSON.stringify([...favSigns]));
  // update chip
  const chip=document.getElementById('wc-'+selKey);
  if(chip)chip.classList.toggle('faved',favSigns.has(selKey));
}

// ── FLASHCARD MODE ──────────────────────────────────────────
let fcKeys=[],fcIdx=0;
function startFlashcard(){
  fcKeys=Object.keys(S).filter(k=>S[k].type==='word').sort(()=>Math.random()-.5);
  fcIdx=0;showFlash();
}
function showFlash(){
  if(!fcKeys||fcKeys.length===0)startFlashcard();
  const key=fcKeys[fcIdx%fcKeys.length];
  const sign=S[key];if(!sign)return;
  const fc=document.getElementById('flashcard');
  if(!fc)return;
  fc.classList.remove('revealed');
  const fw=document.getElementById('fc-word');if(fw)fw.textContent=key.replace(/_/g,' ');
  const fd=document.getElementById('fc-desc');if(fd)fd.textContent=sign.desc||'';
  const fe=document.getElementById('fc-emoji');if(fe)fe.textContent=CAT_EMOJI[key]||'🤟';
  const svg=document.getElementById('fc-hc');
  if(svg){svg.innerHTML='';renderSign(svg,sign,1,null);}
}
function revealFlash(){
  document.getElementById('flashcard').classList.add('revealed');
  playCorrect();
}
function nextFlash(){fcIdx++;showFlash();}

// ── CATEGORY GAME ───────────────────────────────────────────
const GAME_CATS={
  '🍕 FOOD':['FOOD','EAT','DRINK','WATER','MILK','APPLE','BANANA','PIZZA','CAKE','HOT','COLD'],
  '❤️ EMOTIONS':['LOVE','HAPPY','SAD','ANGRY','SCARED','EXCITED','TIRED','FUNNY','SURPRISED'],
  '👨‍👩‍👧 PEOPLE':['MOTHER','FATHER','SISTER','BROTHER','FRIEND','FAMILY','BABY','TEACHER'],
  '📅 DAILY':['SLEEP','WALK','RUN','READ','WRITE','PLAY','WORK','SCHOOL','BOOK','PHONE'],
  '🎨 COLORS':['RED','BLUE','GREEN','YELLOW','WHITE','BLACK','PURPLE'],
};
let cgTarget=[],cgFound=new Set(),cgAll=[];
function startCatGame(){
  const cats=Object.keys(GAME_CATS);
  const cat=cats[Math.floor(Math.random()*cats.length)];
  cgTarget=GAME_CATS[cat];cgFound=new Set();
  const decoys=Object.keys(S).filter(k=>S[k].type==='word'&&!cgTarget.includes(k)).sort(()=>Math.random()-.5).slice(0,6);
  cgAll=[...cgTarget,...decoys].sort(()=>Math.random()-.5).slice(0,12);
  const tEl=document.getElementById('cg-title');if(tEl)tEl.textContent=cat;
  const sEl=document.getElementById('cg-sub');if(sEl)sEl.textContent='Tap every sign that belongs to this category!';
  renderCatGame();
}
function renderCatGame(){
  const grid=document.getElementById('cg-grid');grid.innerHTML='';
  cgAll.forEach(k=>{
    const b=document.createElement('button');b.className='cgbtn';
    const isFound=cgFound.has(k);
    if(isFound)b.classList.add('cg-done');
    b.innerHTML=`<span class="cg-emoji">${CAT_EMOJI[k]||'🤟'}</span>${k.replace(/_/g,' ')}`;
    b.onclick=()=>{
      if(isFound||b.classList.contains('cg-done'))return;
      if(cgTarget.includes(k)){cgFound.add(k);b.classList.add('cg-done');playCorrect();addXP(5);}
      else{b.classList.add('cg-wrong');playWrong();setTimeout(()=>b.classList.remove('cg-wrong'),400);}
      document.getElementById('cg-prog').textContent=cgFound.size+' / '+cgTarget.length+' found';
      if(cgFound.size===cgTarget.length){
        setTimeout(()=>{launchConfetti();showBadge('Category Complete! 🎉');startCatGame();},600);
      }
    };
    grid.appendChild(b);
  });
  document.getElementById('cg-prog').textContent='0 / '+cgTarget.length+' found';
}

// ── INIT ALL SYSTEMS ─────────────────────────────────────────
updateXPBar();
renderLives();
updateProgressRing();
buildRecentSection();
buildDailySign();

// Resize confetti canvas on window resize
window.addEventListener('resize',()=>{confCvs.width=window.innerWidth;confCvs.height=window.innerHeight;});
