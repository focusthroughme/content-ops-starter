// Builds the starter data for Touchline Studio.
// Usage: node build-seed.mjs [outDirForPerDocFiles]
// Writes ../seed.json (backup format the app can import) and, if an outDir is given,
// one JSON file per record for seeding the artifact database.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const shots = (...t) => t.map((x) => ({ t: x, done: false }));
const BRIEF = 'From your brief. Draft plan: nothing here is confirmed with anyone yet.';

const P = (id, o) => ({
  id, origin: 'previous', verify: false, verifyNote: '', status: 'Idea', type: '', topic: 'Football',
  people: '', location: '', filmDate: '', publishDate: '', priority: 'medium',
  languages: [], platforms: ['YouTube'], aspect: '16:9', collab: 'idea', material: '',
  hook: '', shotlist: [], questions: [], titleIdeas: [], thumbnail: '', caption: '', cta: '', notes: BRIEF,
  edited: [], ...o,
});

const projects = [
  P('radomir-interview', {
    title: 'Radomir player interview', type: 'Player interview', people: 'Radomir',
    hook: 'Open on his strongest answer, cut before the payoff, then title card.',
    shotlist: shots('Arrival and handshake', 'Wide two-shot of the interview setup', 'Close-up single on Radomir', 'Cutaways: hands, boots, club badge', 'B-roll: a few touches on the pitch', 'Walk-and-talk closing shot'),
    questions: ['Where did football start for you?', 'Which moment changed your career so far?', 'What does a normal training week look like?', 'What do people get wrong about football in Luxembourg?', 'What is the next goal you have set yourself?'],
    titleIdeas: ['Radomir: the interview', '"Nobody saw this coming": Radomir on his journey'],
    thumbnail: 'Canva: tight portrait of Radomir on the left, one short quote (max 4 words) on the right, club colour as background block.',
    cta: 'Which player should I interview next? Tell me in the comments.',
  }),
  P('sargis-ditl', {
    title: 'Day in the Life with Sargis', type: 'Day in the life', people: 'Sargis',
    hook: 'Alarm goes off, one line from Sargis about what today decides.',
    shotlist: shots('Morning at home: wake-up, breakfast', 'Packing the bag', 'Travel to training or work', 'Training session highlights', 'Lunch and a quiet moment', 'Evening routine and reflection to camera'),
    questions: ['What time does your day really start?', 'What do you never skip?', 'What is the hardest part of the day?', 'What would surprise people about your routine?'],
    titleIdeas: ['A day in the life of Sargis', '24 hours with Sargis'],
    thumbnail: 'Canva: split image morning / training, clock graphic with the wake-up time.',
    cta: 'Whose day should I follow next?',
  }),
  P('ben-kovac-story', {
    title: 'Ben Kovac athlete storytelling', type: 'Athlete story', topic: 'Athlete', people: 'Ben Kovac',
    hook: 'Start with the turning point in his own words, then rewind to the beginning.',
    shotlist: shots('Sit-down interview, two angles', 'Training footage: details and effort', 'Old photos or clips if he can share them', 'A place that matters to his story', 'Slow closing portrait'),
    questions: ['When did you know this was more than a hobby?', 'What was the lowest point and how did you get out of it?', 'Who helped you most?', 'What are you chasing now?'],
    titleIdeas: ['The Ben Kovac story', 'What it really takes: Ben Kovac'],
    thumbnail: 'Canva: dark portrait, one word that sums up the story, small name tag.',
    cta: 'Know an athlete with a story worth telling? Send me a message.',
  }),
  P('creator-bingo', {
    title: 'Creator Bingo challenge', type: 'Challenge', topic: 'Challenge', location: 'Luxembourg or Frankfurt (to decide)',
    hook: 'Show the bingo card, the two teams and the clock: "Nine tasks. One deadline."',
    shotlist: shots('Rules explained in under 30 seconds', 'Bingo card reveal with all nine tasks', 'Team A and Team B introductions', 'Each task attempt (both teams)', 'Clock check-ins', 'Final sprint to the deadline', 'Result and forfeit'),
    questions: [],
    titleIdeas: ['Creator Bingo: 9 tasks, 2 teams, 1 deadline', 'We turned Luxembourg into a bingo card'],
    thumbnail: 'Canva: 3×3 bingo grid with three squares crossed out, both teams either side, timer in the corner.',
    cta: 'Which task should go on the next card?',
    notes: BRIEF + ' Format: two teams, nine tasks and a deadline. The nine tasks and the second team are still open.',
  }),
  P('trade-up-2', {
    title: 'Trade-Up Challenge episode 2: from a pen toward a car', type: 'Challenge', topic: 'Challenge',
    priority: 'high', collab: 'none',
    material: 'Episode 1 is published, so a recap can be cut from existing footage.',
    hook: 'Hold up the current item: "Last time this was a pen. Today we trade it again."',
    shotlist: shots('Recap of episode 1 in 20 seconds', 'Current item and its rough value', 'Each trade attempt, including the refusals', 'Reaction after each successful trade', 'Running "trade ladder" graphic', 'Cliffhanger: the item going into episode 3'),
    questions: [],
    titleIdeas: ['From a pen to a car: episode 2', 'Trading up again: what did the pen become?'],
    thumbnail: 'Canva: pen on the left, arrow, current item in the middle, car silhouette with a question mark on the right.',
    cta: 'Have something to trade? Write to me.',
    notes: BRIEF + ' Priority set to high as a suggestion because it continues a published series. Change it if you disagree.',
  }),
  P('tiago-rodrigues-followup', {
    title: 'Tiago Rodrigues follow-up: what changed since our first vlog?', type: 'Player interview', people: 'Tiago Rodrigues',
    priority: 'high',
    material: 'The first vlog is published, so before/after cuts can use that footage.',
    hook: 'Play a short line from the first vlog, then cut to Tiago today reacting to it.',
    shotlist: shots('Tiago watching a clip from the first vlog', 'Sit-down: what changed', 'Current training or matchday footage', 'Side-by-side then and now moments', 'Closing: where he wants to be at the next follow-up'),
    questions: ['What has changed since we filmed the first vlog?', 'What did people say to you after it came out?', 'What would you tell yourself from back then?', 'What is next?'],
    titleIdeas: ['Tiago Rodrigues: what changed since our first vlog?', 'We filmed him once. Here is what happened next.'],
    thumbnail: 'Canva: then / now split of Tiago with the word "NOW?" over the right half.',
    cta: 'Watch the first vlog if you missed it.',
    notes: BRIEF + ' This is a follow-up, not a first shoot: the original Tiago Rodrigues vlog is in the archive. Priority high is a suggestion.',
  }),
  P('ylb-reunion', {
    title: 'YoungLuxBallers reunion', type: 'Community', people: 'YoungLuxBallers',
    material: 'The earlier YoungLuxBallers video is published and can be referenced.',
    hook: 'Old clip of the group, hard cut to everyone walking back in today.',
    shotlist: shots('Arrivals and greetings', 'Group catch-up: who is where now', 'A small game or challenge together', 'Individual one-line updates', 'Group photo recreated from the old video'),
    questions: ['Where are you playing now?', 'What is your best memory from back then?', 'Who changed the most?'],
    titleIdeas: ['YoungLuxBallers: the reunion', 'Where are they now? YoungLuxBallers'],
    thumbnail: 'Canva: old group photo and new group photo stacked, "REUNION" across the middle.',
    cta: 'Tag someone who should have been there.',
    notes: BRIEF + ' A reunion, not a first shoot: the earlier YoungLuxBallers video is in the archive.',
  }),
  P('derby-three-views', {
    title: 'A derby told through a player, a fan and a coach', type: 'Matchday vlog',
    hook: 'Three faces, one sentence each about what this derby means, then kick-off whistle.',
    shotlist: shots('Player: pre-match routine', 'Fan: walk to the ground and the stand', 'Coach: team talk or touchline (if permitted)', 'Match moments from each viewpoint', 'Final whistle reaction from all three', 'One closing line each'),
    questions: ['What does this derby mean to you?', 'What is your first derby memory?', 'What happens if you lose this one?'],
    titleIdeas: ['One derby, three stories', 'Player, fan, coach: the same derby from three sides'],
    thumbnail: 'Canva: three vertical strips (player, fan, coach) with the score hidden behind a blur.',
    cta: 'Which derby should I cover next?',
    notes: BRIEF + ' Which derby and which three people are still open. Filming a coach needs club permission.',
  }),
  P('lux-vs-germany-matchday', {
    title: 'Luxembourg versus nearby Germany matchday comparison', type: 'Matchday vlog',
    hook: 'Two tickets in one hand: "Same weekend, two countries, 40 minutes apart."',
    shotlist: shots('Travel to each ground', 'Ticket price and entry', 'Food and drink at both', 'Atmosphere and crowd', 'Level of play, a few match moments', 'Verdict to camera'),
    questions: [],
    titleIdeas: ['Matchday in Luxembourg vs Germany: what is the difference?', 'I went to two matchdays across the border'],
    thumbnail: 'Canva: split screen with both flags, two stadium shots and "VS" in the middle.',
    cta: 'Which country does matchday better?',
    notes: BRIEF + ' Clubs and fixtures are not chosen yet. Check filming rules at both grounds.',
  }),
  P('national-team-followups', {
    title: 'Follow-up interviews with players from my earlier national-team coverage', type: 'Player interview',
    material: 'Published U17 and U18 national-team videos can supply "back then" clips.',
    hook: 'Match clip from the earlier coverage, freeze frame on the player, cut to them today.',
    shotlist: shots('Clip from the original match video', 'Sit-down or walk-and-talk today', 'Current club training footage', 'Then and now comparison'),
    questions: ['What do you remember from that game?', 'Where are you playing now?', 'What did the national team teach you?', 'What is the next step?'],
    titleIdeas: ['Where are they now? Luxembourg youth internationals', 'I filmed them for the national team. This is where they are today.'],
    thumbnail: 'Canva: national-team shot on the left, current club shot on the right, year labels on both.',
    cta: 'Which player should I catch up with next?',
    notes: BRIEF + ' Could become a series, one player per episode. No player has been asked yet.',
  }),
  P('mifa-metz', {
    title: 'MIFA Metz', type: '', verify: true,
    verifyNote: 'Status to verify: publication is not confirmed. Check your channels, then either move it to the archive or set the real production status.',
    collab: 'none', notes: 'Kept in the pipeline with a placeholder status until you confirm whether it was published.',
  }),
  P('four-languages-short', {
    title: 'One matchday moment in four languages', origin: 'new', type: 'Short/Reel', aspect: '9:16',
    platforms: ['YouTube', 'TikTok', 'Instagram'], languages: ['German', 'Luxembourgish', 'French', 'English'], collab: 'none',
    hook: '"I am going to ask the same question in four languages."',
    shotlist: shots('Same short question asked in each language', 'Quick-cut answers', 'On-screen label for each language'),
    questions: ['Who wins today?'],
    titleIdeas: ['Same question, four languages'],
    thumbnail: 'Canva cover: four small flags or language tags around one face.',
    cta: 'Which language should the next video be in?',
    notes: 'New suggestion from Claude, not from your earlier list. Uses the four languages you already work in; each version is recorded by you, nothing is translated automatically.',
  }),
  P('matchday-behind-scenes', {
    title: 'The people who make a matchday happen', origin: 'new', type: 'Matchday vlog',
    hook: 'Empty ground, early morning: "Kick-off is in eight hours. These people are already here."',
    shotlist: shots('Ground staff preparing the pitch', 'Kit laid out in the changing room', 'Ticket booth and kiosk opening', 'Kick-off from their point of view', 'Clearing up after the final whistle'),
    questions: ['What time does your matchday start?', 'What does nobody notice about your job?'],
    titleIdeas: ['The matchday you never see', 'Who runs a matchday in Luxembourg?'],
    thumbnail: 'Canva: volunteer or groundskeeper portrait in front of an empty stand.',
    cta: 'Know a club volunteer who deserves a video?',
    notes: 'New suggestion from Claude, not from your earlier list. No club has been asked.',
  }),
];

const BRIEF_SRC = 'Brief (unverified)';
const V = (id, label, topic, notes = '') => ({
  id, label, title: '', platform: '', topic, views: null, viewsText: '', duration: '', ageText: '',
  source: BRIEF_SRC, capturedAt: '', url: '', notes, edited: [],
});
const T = 'Topic assumed from the name. Correct it if needed.';
const videos = [
  V('tim-flick', 'Tim Flick', '', 'Topic left blank: the brief does not say what kind of video this is.'),
  V('tiago-rodrigues', 'Tiago Rodrigues (first vlog)', 'Football', T),
  V('tiago-costa', 'Tiago Costa', '', 'Topic left blank: the brief does not say what kind of video this is.'),
  V('dejan-ngemba', 'Dejan Ngemba', '', 'Topic left blank: the brief does not say what kind of video this is.'),
  V('hostert-kaerjeng-cup-final', 'Hostert versus Käerjeng cup final', 'Football'),
  V('lux-turkey-u18-game-1', 'Luxembourg versus Turkey U18 (game 1)', 'Football', 'One of two Luxembourg versus Turkey U18 videos.'),
  V('lux-turkey-u18-game-2', 'Luxembourg versus Turkey U18 (game 2)', 'Football', 'One of two Luxembourg versus Turkey U18 videos.'),
  V('malta-lux-u17', 'Malta versus Luxembourg U17', 'Football'),
  V('youngluxballers', 'YoungLuxBallers', 'Football', T),
  V('loris-muay-thai', 'Loris’s Muay Thai fight', 'Athlete'),
  V('community-runs', 'Community runs', 'Community', 'Possibly more than one video. Split into separate records once the screenshots show them.'),
  V('table-tennis-championships', 'Table-tennis championships', 'Athlete', T + ' Possibly more than one video.'),
  V('spain', 'Spain', 'Travel'),
  V('athens', 'Athens', 'Travel'),
  V('rome', 'Rome', 'Travel'),
  V('ikea-with-lenny', 'IKEA with Lenny', 'Lifestyle', T),
  V('bowling-and-darts', 'Bowling and darts', 'Lifestyle', T),
  V('trade-up-1', 'Trade-Up episode 1', 'Challenge'),
];

const SUBS = ['Auto captions generated in CapCut, then proofread line by line', 'Names, clubs and places spelled correctly', 'Caption language matches the spoken language (type Luxembourgish by hand if auto captions fail)', 'Maximum two lines, large type, strong contrast', 'Captions inside the safe zone, clear of platform buttons', 'Hook text on screen in the first two seconds'];
const C = (id, sourceId, title, angle, hook, cover) => ({
  id, title, sourceKind: 'video', sourceId, status: 'suggested', tcIn: '', tcOut: '', angle, hook,
  framing: 'Reframe to 9:16 in CapCut. Keep the face in the upper-middle third and leave the bottom fifth free for captions.',
  subs: SUBS.map((t) => ({ t, done: false })), cover,
  pub: { youtube: { title: '', caption: '', date: '' }, tiktok: { caption: '', date: '' }, instagram: { caption: '', date: '' } },
  notes: 'Suggestion of what to look for. Not confirmed in the footage: add timecodes once you find the moment.', edited: [],
});
const clips = [
  C('clip-trade-up-first-trade', 'trade-up-1', 'The first trade', 'Look for the moment the pen is swapped for the first item, including the other person’s reaction.', 'I started with a pen.', 'Canva cover: pen, arrow, first item. Three words maximum.'),
  C('clip-cup-final-whistle', 'hostert-kaerjeng-cup-final', 'Final whistle', 'Look for the seconds around the final whistle: players, bench and crowd.', 'This is what a cup final sounds like in Luxembourg.', 'Canva cover: celebration frame with both club names.'),
  C('clip-tiago-best-line', 'tiago-rodrigues', 'Tiago’s strongest line', 'Look for one answer of 15 to 30 seconds that makes sense without the rest of the vlog.', '', 'Canva cover: Tiago portrait with the quote in four words or fewer.'),
  C('clip-loris-walkout', 'loris-muay-thai', 'Walk-out and first exchange', 'Look for the walk to the ring and the first few seconds of the fight, if you filmed them.', 'His first seconds in the ring.', 'Canva cover: Loris at the ring with the event name.'),
];

const seed = { app: 'touchline-studio', version: 1, exportedAt: '2026-11-13', projects, videos, clips, templates: [] };
writeFileSync(join(here, '..', 'seed.json'), JSON.stringify(seed, null, 1));

const out = process.argv[2];
if (out) {
  const writes = [];
  for (const coll of ['projects', 'videos', 'clips']) {
    mkdirSync(join(out, coll), { recursive: true });
    for (const r of seed[coll]) {
      const f = join(out, coll, r.id + '.json');
      writeFileSync(f, JSON.stringify(r));
      writes.push({ op: 'set', collection: coll, doc_id: r.id, file_path: f });
    }
  }
  writeFileSync(join(out, 'writes.json'), JSON.stringify(writes));
}
console.log(`seed: ${projects.length} projects, ${videos.length} videos, ${clips.length} clips`);
