// Public channel data fetched on 2026-11-13 (Europe/Luxembourg). Titles, views, durations and upload ages are
// exactly as the public pages displayed them. Topics are assigned from titles only; no footage was watched.
export const CAPTURED = '2026-11-13';

export const channels = [
  { id: 'youtube', name: 'YouTube', handle: '@MiguelEbrahimi', display: '17 to Succes', url: 'https://www.youtube.com/@miguelebrahimi',
    stats: [['Subscribers', '165'], ['Uploads', '65']],
    coverage: 'All 65 public uploads listed on the channel: 28 videos and 37 Shorts. YouTube shows no upload age for Shorts in this list, so Shorts have no per-month figure.' },
  { id: 'tiktok', name: 'TikTok', handle: '@miguel.ebrahimi', display: 'miguel.ebrahimi', url: 'https://www.tiktok.com/@miguel.ebrahimi',
    stats: [['Followers', '2,053'], ['Likes', '81,409'], ['Videos', '377']],
    coverage: '30 of 377 videos: the 10 most viewed and the 20 most recent. Rankings describe this sample, not the whole account.' },
  { id: 'instagram', name: 'Instagram', handle: '@miguel.ebrahimi', display: 'Miguel', url: 'https://www.instagram.com/miguel.ebrahimi/',
    stats: [['Followers', '717'], ['Following', '2,777']],
    coverage: 'The 12 most recent posts only. Photo and slideshow posts show likes but no view count.' },
].map((c) => ({ ...c, capturedAt: CAPTURED, source: 'Public channel data' }));

// [videoId, title, views, duration, age shown, topic, existing archive id + working name (if it was in the brief)]
export const ytLong = [
  ['Sem_0bObqZg', '24H in ATHENS 🇬🇷 | Food, City & Complete Chaos', 79, '27:58', '1 month ago', 'Travel', 'athens', 'Athens'],
  ['N2k74f8xoUQ', 'We Took the Boys to Spain 🇪🇸 … BIG MISTAKE 😂', 370, '45:32', '2 months ago', 'Travel', 'spain', 'Spain'],
  ['-NQMIV5jXzs', '🎥 IKEA VLOG with Lenny 😂🛒Chaos, Food & IKEA Trip', 68, '19:34', '3 months ago', 'Lifestyle', 'ikea-with-lenny', 'IKEA with Lenny'],
  ['5yaTKfNGiJg', 'We ended up at the casino… 😭🎰 | Night out vlog with the boys', 81, '23:56', '3 months ago', 'Lifestyle'],
  ['45Ic9oLlSgw', 'Can I turn a pen into a car? 🚗🔥 | Trade-Up Challenge #1', 55, '18:41', '3 months ago', 'Challenge', 'trade-up-1', 'Trade-Up episode 1'],
  ['kirmzulDo6w', 'The Biggest Community Run in Luxembourg? 🏃‍♂️🔥', 125, '41:51', '5 months ago', 'Community', 'community-runs', 'Community run (June)'],
  ['I2pVB66G0lo', 'Football, Barber & Chaos 😂🔥 | Weekend Vlog', 127, '14:18', '5 months ago', 'Lifestyle'],
  ['pfRH1lxUdX8', 'MUAY THAI FIGHT VLOG 🥊 | A whole day with Loris before the fight 😳🔥', 74, '41:21', '5 months ago', 'Athlete', 'loris-muay-thai', 'Loris’s Muay Thai fight'],
  ['VOz5zNfU4g0', 'A Day with Dejan Ngemba ⚽🔥 | Regional Vlog & Behind The Scenes', 334, '32:09', '6 months ago', 'Football', 'dejan-ngemba', 'Dejan Ngemba'],
  ['6wN2emBcds4', 'Cup final in Luxembourg 🔥🇱🇺 US Hostert vs Kaerjeng 97… what an atmosphere 😮‍💨⚽', 833, '42:14', '6 months ago', 'Football', 'hostert-kaerjeng-cup-final', 'Hostert versus Käerjeng cup final'],
  ['FISnusv-icY', 'Day in the Life ⚽ | Matchday mam Tiago Costa', 289, '25:47', '7 months ago', 'Football', 'tiago-costa', 'Tiago Costa'],
  ['YMabJoOz5cU', 'Hannert de Kulissen ⚽ | Football Vlog mam Tiago Rodrigues', 509, '31:10', '8 months ago', 'Football', 'tiago-rodrigues', 'Tiago Rodrigues (first vlog)'],
  ['et1FYJd3CYQ', 'Behind the Scenes ⚽ | Matchday Vlog with Tim Flick 🔥', 409, '13:04', '8 months ago', 'Football', 'tim-flick', 'Tim Flick'],
  ['ylahdmEDwt0', 'STAARK Optrëtt & 3–0 GEWONN 🇱🇺🔥 | Malta vs Lëtzebuerg U17', 112, '3:24', '8 months ago', 'Football', 'malta-lux-u17', 'Malta versus Luxembourg U17'],
  ['g3w-dVthAjA', 'Mir sinn NET dofir gebaut 🎳🎯 | Bowling & Darts mat de Boys 😂', 112, '16:50', '8 months ago', 'Lifestyle', 'bowling-and-darts', 'Bowling and darts'],
  ['0EQZuwPE3B8', '🇱🇺Luxemburg Landesmeeschterschaften Vlog 🔥 2 Deeg Ping Pong Chaos + Highlights', 204, '5:35', '8 months ago', 'Athlete', 'table-tennis-championships', 'Table-tennis championships'],
  ['G-4yF-SEYEY', '1-0 Drama! Türkiye vs Luxembourg U18 | Matchday + Interviews🔥', 221, '10:14', '8 months ago', 'Football', 'lux-turkey-u18-game-2', 'Luxembourg versus Turkey U18 (0–1 game)'],
  ['Kg02QRsVaVs', 'Luxembourg beats Turkey 2–1! 🔥 U18 Matchday + Exclusive Interview', 230, '7:36', '9 months ago', 'Football', 'lux-turkey-u18-game-1', 'Luxembourg versus Turkey U18 (2–1 game)'],
  ['ghtbKxXcZxI', 'Weekend Vibes | Saturday Vlog', 207, '24:08', '9 months ago', 'Lifestyle'],
  ['jEntEpilV0w', 'GYM KLEIDER TEST – Besser als erwartet?! | NO REST Review', 101, '3:38', '9 months ago', 'Other'],
  ['H4wf7ed4330', 'ROME HIT DIFFERENT 🇮🇹 | Travel Vlog', 239, '13:38', '10 months ago', 'Travel', 'rome', 'Rome'],
  ['tcI9CDx2XZQ', 'ROME WAS A MOVIE 🎥 🇮🇹 (Trailer)', 88, '0:17', '10 months ago', 'Travel'],
  ['vkmvUe9_z4s', 'Matchday Vlog | Youngluxballers', 532, '17:48', '10 months ago', 'Football', 'youngluxballers', 'YoungLuxBallers'],
  ['jXv9TxCEpXk', 'Christmas Market, Laser Game & Late Food | Daily Vlog', 249, '8:21', '10 months ago', 'Lifestyle'],
  ['aSFlyZ96QAs', 'Running Vlog | Discipline Over Motivation', 110, '1:53', '10 months ago', 'Lifestyle'],
  ['e0gr7fAJ3nk', 'Sunday Vlog | Turnier, Team-Vibes & NFL Watch Party 🏈⚽', 198, '4:48', '10 months ago', 'Lifestyle'],
  ['_u1rAj9WBys', 'Community Run | Kleine Schritte, großer Fortschritt', 179, '2:08', '10 months ago', 'Community'],
  ['y8TvFKvuq7o', 'Miguel Ebrahimi | Defensive Midfielder / Center Back | Highlights', 289, '1:25', '10 months ago', 'Football'],
];

// [videoId, title, views as shown, topic] in the order the channel lists them (newest first)
export const ytShorts = [
  ['CqKNDTqwnhU', 'Come With Me To Get A Fresh Cut 💈🔥 | Mowgli Barber', '88', 'Lifestyle'],
  ['0f-LFIK7yvM', '• This kebab is famous everywhere… but is it worth it? 🌯 #kebab #kebabhouse #echternach #luxembourg', '1.4K', 'Other'],
  ['_okcGWjT3E8', '10 Boys. Barcelona. 😭🇪🇸Spain trip with the boys = guaranteed chaos 😂🔥Full vlog now 👀', '255', 'Travel'],
  ['_VB31z9h5AM', 'l MUAY THAI FIGHT VLOG 🥊 | #muaythai #fightvlog  #kickboxing #vlog #luxembourg', '387', 'Athlete'],
  ['Sjj6CyJNeYM', 'ESN Isoclear Fresh Orange tested 🍊👀 Does it really taste like a soft drink? 😂💪', '787', 'Other'],
  ['bT-tS6QpdXU', 'Coupe Finale🔥🇱🇺US Hostert 🆚 UN Kaerjeng 97 ⚽👀🎥 #luxembourg🇱🇺 #fyp #matchday #Vlog #football', '725', 'Football'],
  ['OjNUqQPJ9Bc', 'POV: T’as commencé le box avec du l’argent 100% haram…🤣 #boxing #memes #fail #french #funny', '2.6K', 'Other'],
  ['IGblsqthgSc', 'WHATTTTTTTTTTTT SPIDERMAN IS CHILLING ON OME TV🤣🤣🤣🔥🔥🕷️🕷️🕷️ #spiderman #funny #ometv #wacky', '1.8K', 'Other'],
  ['xhwf8kCquZw', 'MAN VS FOOD CHALLENGE 🍔💪🏼🔥 #manvsfood #challenge #luxembourg #burger #food', '1.4K', 'Challenge'],
  ['Lli_0O1DjNk', 'Matchday mam Tim Flick ⚽🔥Disziplin. Fokus. Passioun.', '24', 'Football'],
  ['yCEkCeW6qIs', 'Wenns du appes errechen wells dann muss nemmen du drun glewen du brauchs keen aneren!🔥', '123', 'Motivation'],
  ['DoXCpTT6Qn0', 'After the 0-1 game 🇱🇺🔥Mylan Oger & Luca Carolei speak', '593', 'Football'],
  ['0ZhSO4o2Cng', 'PSV Talent Emre Can Duran speaks after 1–0 win 🇹🇷⚽', '739', 'Football'],
  ['N8JXYR1Ur6c', 'Mach deine Augen auf, und glaube dran!🫵🏼🔥', '188', 'Motivation'],
  ['5zBRHBa04Jw', 'Luxembourg National Talents Speak! 🇱🇺⚽ Exclusive Interview', '1.1K', 'Football'],
  ['cSvy2Vkip3A', 'Turkey National Talent Interview! 🇹🇷⚽ Vatan Özcan speaks after the game', '1.5K', 'Football'],
  ['Y1VfeqtOwCk', 'Ma deng Aan op, an ignoreir wat annerer vun dea haalen, gleef un dech🔥🫵🏼', '27', 'Motivation'],
  ['Cy6aczcYQYo', 'Wenn du etwas erreichen willst dann musst du dran arbeiten, keiner hilft dir🔥🫵🏼', '1.6K', 'Motivation'],
  ['kBpyXpvRDW8', 'Wenns du appes errechen wells, musst du drun schaffen!!🔥', '1.9K', 'Motivation'],
  ['luNban7P0fg', 'Wenn du nicht dran glaubst, wird es niemand tuen. Zieh durch🔥🔥', '649', 'Motivation'],
  ['tiYS9yto3fs', 'Realizeier et befier et ze speit ass! 🔥🫵🏼', '395', 'Motivation'],
  ['DRYnJqZomsY', 'Deine Zeit kommt.⏳📈', '1.3K', 'Motivation'],
  ['EQ7Xb3yFBxQ', 'Disziplin iwer Gefiller! 🔥🫵🏼', '735', 'Motivation'],
  ['4D0g0A7TSRg', 'Wen du nicht dran glaubst, wer dann? Verfolge deine Ziele!! 🔥🫵🏼', '1.3K', 'Motivation'],
  ['dmwqGolFKN8', 'Keen muss un dech gleewen. Nëmmen du.🔥🫵🏼', '173', 'Motivation'],
  ['4-Bd6uOZE9U', 'Niemand muss an dich glauben. Nur du.🔥🫵🏼', '1.6K', 'Motivation'],
  ['0xWeooMqGqQ', '“Crazy moment from my latest vlog 😳🔥Full video is out now!”', '1K', 'Other'],
  ['aUoRZsceF6c', '“Crazy moment from my latest vlog 😳🔥Full video is out now!”', '1.2K', 'Other'],
  ['HsvluDiu3_E', 'More than just a team.This is a family. ⚽🤍', '958', 'Football'],
  ['ZpGbSXjrOhk', 'Matchday vs MIFA Metz Academy ⚽', '1.4K', 'Football'],
  ['X9k0KktdEoU', 'Behind the scenes in Italy 🇮🇹No filter. No script. Just moments.', '745', 'Travel'],
  ['RuicxxwzWiA', 'Gleef un dech.Net jiddereen gesäit deng Visioun an dat ass okay.Du  muss se selwer gleewen.💭🔥', '649', 'Motivation'],
  ['PXbXIFyA3vs', 'Ech testen Gym-Kleeder vun @norestclo   #GymLU #FitnessLU#GymKleeder #TestVideo#SportStyle #Shorts', '191', 'Other'],
  ['YjOpeFJJQh8', 'Ich teste Nasenpflaster 👃💨 #Nasenpflaster #Fitness #Atmung#SportAlltag #GymLife #Shorts @ELLICIT', '723', 'Other'],
  ['IXfiN5SO02U', 'Ech testen Nasenplaster? 👀👃 #Lëtzebuerg #Nasenplaster #TestVideo #GymLU #Shorts @ELLICIT', '737', 'Other'],
  ['X9vRRke4px0', 'Wenn +352 plötzlich nicht mehr reicht… ✈️#auswandern #neuanfang #lebenimausland #neuephase #kapitel', '93', 'Other'],
  ['YrpFPl2Nap4', 'It takes time and sacrifice #Transformation#GlowUp#BodyTransformation#GymMotivation#Improvement', '1K', 'Motivation'],
];

// [shortcode, caption as shown (may be cut off by the source), date, likes, comments, views, topic]
export const instagram = [
  ['DXb-4AmjFDm', 'HIGHLIGHTS Miguel Ebrahimi Persian Armenian German FC Kehlen #luxembourg #football #highlights #scout #footballvlog', '2026-04-22', 70, 21, 1984, 'Football'],
  ['Dfcnhn8jNFX', 'Life on offline mode. #viral #slideshow #life #family #friends', '2026-11-07', 130, 4, null, 'Lifestyle'],
  ['DeUUeEgMdc2', 'Athen war definitiv eng Rees wäert 🇬🇷 Tëscht Akropolis, guddem Iessen, Nuechten an der Stad an einfach duerch Athen t…', '2026-10-10', 37, 2, 1421, 'Travel'],
  ['Dc_arVDDFD1', '📍🇬🇷 #athen #vacation #trip #vlog #slideshow', '2026-09-07', 135, 2, null, 'Travel'],
  ['Dc_JbecsgsE', '10 Boys. Barcelona. Zero plan. 😭🇪🇸 Spain trip with the boys = guaranteed chaos 😂🔥 Full vlog now on YouTube 👀 #spa…', '2026-09-07', 48, 3, 2040, 'Travel'],
  ['Dc_I59hsjk-', '10 Boys. Barcelona. Zero plan. 😭🇪🇸 Spain trip with the boys = guaranteed chaos 😂🔥 Full vlog now on YouTube 👀 #spa…', '2026-09-07', 72, 3, 2164, 'Travel'],
  ['DcrBMEwsEGH', 'Dancing connects people from all around the world 🌍🇬🇷❤️ #greece #dancing #viral #love #happy', '2026-08-30', 31, 0, 1589, 'Travel'],
  ['DcbBhOTMuae', 'Mir wollten NËMMEN kucken… 😭🛒 IKEA mam Lenny war erëm komplett Chaos 😂 De ganze Vlog ass elo op YouTube 🔥ikea #ikea…', '2026-08-24', 69, 0, 2808, 'Lifestyle'],
  ['DZYOxx6DFtK', '💪🏼THE PAST FEW MONTHS have been an amazing experience, this is my road to a influencer. Everyday 1.2% better. Thank t…', '2026-06-09', 119, 8, null, 'Motivation'],
  ['DZVlmu_sgM6', 'Luxembourg Community Run 🇱🇺🏃‍♂️ | Crazy Interviews, Good Vibes & Strong Community #luxembourg #vlog #viral #communit…', '2026-06-08', 128, 0, 3575, 'Community'],
  ['DY4WpS8sEik', 'Barber 💈 Football ⚽️ a Chaos mat de Boys 😭🔥 #weekendvlog #luxembourg #footballvlog #fckehlen #barbervlog', '2026-05-28', null, 3, 4152, 'Lifestyle'],
  ['DYhFZkcMTyd', 'MUAY THAI FIGHT VLOG 🥊 | E ganzen Dag mam Loris virum Kampf 😳🔥#fightday #muaythaï #vlog #lëtzebuerg #viral', '2026-05-19', 70, 2, 2257, 'Athlete'],
];

// TikTok topics, assigned from the caption text only.
export function tiktokTopic(desc) {
  const d = desc.toLowerCase();
  if (/fussball|football|soccer|match|champion|ehrenpromotion|stadion|tor+ /.test(d)) return 'Football';
  if (/rugby|halfmaraton|running/.test(d)) return 'Athlete';
  if (/athen|greece|gyros/.test(d)) return 'Travel';
  if (/francofolies/.test(d)) return 'Lifestyle';
  if (/grateful|peace|mentality|mindset|just work|just be you|goggins|never be the same/.test(d)) return 'Motivation';
  return 'Other';
}

export const analysis = {
  id: 'analysis', date: CAPTURED, by: 'Claude',
  observations: [
    'YouTube videos: the four most viewed are all football with a named player, team or final (cup final 833, YoungLuxBallers 532, Tiago Rodrigues 509, Tim Flick 409). Six of the top seven are football.',
    'YouTube videos per month of age: Spain leads (370 views, shown as 2 months ago), then the cup final (833, 6 months). The three most recent non-football videos sit at the bottom: IKEA 68, casino night 81, Trade-Up #1 55, each shown as 3 months ago.',
    'YouTube Shorts are seen more than long videos: 14 of 37 Shorts show 1K views or more, while no long video has reached 1K. The post-match interview Shorts from the Turkey games (1.5K, 1.1K, 739, 593) each beat the full match videos (230 and 221).',
    'The most viewed Shorts are not football: a boxing meme (2.6K), a Luxembourgish motivation clip (1.9K) and an Ome TV clip (1.8K). The MIFA Metz matchday is published as a Short with 1.4K views.',
    'TikTok is the largest audience (2,053 followers against 165 YouTube subscribers and 717 on Instagram). The two most viewed TikToks in the sample are from the same German match on 3 May 2026, 1. FC Saarbrücken II against SV Elversberg II: 175,126 and 119,983 views. Next come a Luxembourg home win with three national-team interviews (37,623) and an Ehrenpromotion clip (30,116).',
    'One of those TikToks is captioned “NEW VLOG LOADING”, but no YouTube upload has Saarbrücken or Elversberg in its title.',
    'TikTok posts from October and November 2026 in the sample show 368 to 4,656 views; most are slideshows or mindset posts without football.',
    'Teasers reach far more people than the full videos: the IKEA reel has 2,808 Instagram views against 68 on the YouTube video, the community run 3,575 against 125, and the Loris fight 2,257 against 74.',
    'The YouTube channel is named “17 to Succes” and its description says 18 years old, while Instagram and TikTok use miguel.ebrahimi.',
  ],
  hypotheses: [
    'German lower-league football may reach a much larger TikTok audience than Luxembourg football because the tagged clubs and their fans are a bigger pool. Two clips from one match are not proof.',
    'Short post-match interviews with named youth internationals may travel further than full match vlogs because the players and their circles share them.',
    'Teasers may not convert to YouTube views because Instagram and TikTok captions cannot link out and the teaser already shows the best moment.',
    'The recent lifestyle and challenge videos may be weaker on YouTube because the channel’s viewers came for football. They are also the newest, so part of the gap is age.',
    'A channel name that differs from the name on Instagram and TikTok may make the YouTube channel harder to find by search.',
  ],
  experiments: [
    'If the Saarbrücken against Elversberg footage exists, publish that vlog on YouTube and re-share the two TikToks pointing to it. Record the YouTube views at 7 and 30 days.',
    'At the next match, cut one 30 to 60 second interview Short per player and post it within 24 hours on all three platforms. Compare with the full video at 30 days.',
    'For the next two long videos, end the teaser before the payoff on one and show the payoff on the other. Compare YouTube views at 14 days.',
    'Film the Luxembourg versus nearby Germany matchday comparison next: it combines the format that works on YouTube with the topic that works on TikTok.',
    'Rename the YouTube channel to match the other two platforms and correct the age in the description. Note subscriber count before and 30 days after.',
    'Refresh these numbers once a month (ask Claude, or edit the archive by hand) so videos are compared at the same age.',
  ],
};
