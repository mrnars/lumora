const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });
}

const exploreSection = document.querySelector('.explore-section');

if (exploreSection) {
  const topics = [
    'Why do some animals glow in the dark?',
    'How do clouds know when it will rain?',
    'The surprising story behind the color purple',
    'Why do we get goosebumps?',
    'How can trees share resources underground?',
    'What makes the Moon look different each night?',
  ];
  const facts = [
    'Octopuses have three hearts, and two of them help move blood to the gills.',
    'A group of flamingos is called a flamboyance.',
    'The Eiffel Tower can grow a little taller in hot weather as its metal expands.',
    'Honeybees share the direction of food by dancing.',
    'Some bamboo can grow nearly a metre in a single day.',
    'The Pacific Ocean is wider than the Moon.',
  ];
  const countries = [
    { name: 'Japan', fact: 'Japan is made up of thousands of islands.' },
    { name: 'Iceland', fact: 'Iceland gets much of its energy from geothermal heat.' },
    { name: 'Kenya', fact: 'Kenya is home to the Great Rift Valley.' },
    { name: 'Brazil', fact: 'Most of the Amazon rainforest lies in Brazil.' },
    { name: 'New Zealand', fact: 'New Zealand was one of the first countries to give women the vote.' },
    { name: 'Italy', fact: 'Italy is home to more UNESCO World Heritage sites than any other country.' },
  ];

  const chooseDifferent = (items, previous) => {
    if (items.length < 2) return 0;
    let next = Math.floor(Math.random() * items.length);
    while (next === previous) {
      next = Math.floor(Math.random() * items.length);
    }
    return next;
  };

  let lastTopic = -1;
  let lastFact = -1;
  let lastCountry = -1;

  const topicButton = exploreSection.querySelector('#topic-button');
  const topicResult = exploreSection.querySelector('#topic-result');
  if (topicButton && topicResult) {
    topicButton.addEventListener('click', () => {
      lastTopic = chooseDifferent(topics, lastTopic);
      topicResult.textContent = topics[lastTopic];
    });
  }

  const countryButton = exploreSection.querySelector('#country-button');
  const countryResult = exploreSection.querySelector('#country-result');
  const mapButton = exploreSection.querySelector('#map-button');
  const mapResult = exploreSection.querySelector('#map-result');
  const showCountry = (result) => {
    lastCountry = chooseDifferent(countries, lastCountry);
    result.textContent = `${countries[lastCountry].name} — ${countries[lastCountry].fact}`;
  };

  if (countryButton && countryResult) {
    countryButton.addEventListener('click', () => showCountry(countryResult));
  }

  if (mapButton && mapResult) {
    mapButton.addEventListener('click', () => showCountry(mapResult));
  }

  const surpriseButton = exploreSection.querySelector('#surprise-button');
  const factResult = exploreSection.querySelector('#fact-result');
  if (surpriseButton && factResult) {
    surpriseButton.addEventListener('click', () => {
      lastFact = chooseDifferent(facts, lastFact);
      factResult.textContent = facts[lastFact];
    });
  }
}

const musicSection = document.querySelector('.music-section');

if (musicSection) {
  const musicCatalog = [
    { title: 'Weightless', artist: 'Marconi Union', genre: 'Ambient', mood: ['calm', 'low-key'], tags: ['studying', 'relaxing', 'traveling'], note: 'A spacious, gentle ambient piece for a slower moment.' },
    { title: 'Clair de Lune', artist: 'Claude Debussy', genre: 'Classical', mood: ['calm', 'thoughtful'], tags: ['studying', 'relaxing', 'traveling'], note: 'A flowing piano classic with a dreamy, reflective feel.' },
    { title: 'Sunset Lover', artist: 'Petit Biscuit', genre: 'Electronic', mood: ['calm', 'upbeat'], tags: ['studying', 'traveling', 'discoveries'], note: 'Warm electronic layers with an easy, sunlit pulse.' },
    { title: 'Here Comes the Sun', artist: 'The Beatles', genre: 'Rock', mood: ['upbeat', 'low-key'], tags: ['traveling', 'popular', 'discoveries'], note: 'A bright, familiar song with a gently optimistic lift.' },
    { title: 'Dreams', artist: 'Fleetwood Mac', genre: 'Rock', mood: ['thoughtful', 'calm'], tags: ['traveling', 'popular', 'relaxing'], note: 'A smooth, memorable groove that feels made for the open road.' },
    { title: 'Three Little Birds', artist: 'Bob Marley & The Wailers', genre: 'Reggae', mood: ['upbeat', 'low-key'], tags: ['relaxing', 'traveling', 'popular'], note: 'A warm reggae favorite with an easygoing rhythm.' },
    { title: 'Electric Feel', artist: 'MGMT', genre: 'Indie', mood: ['upbeat', 'adventurous'], tags: ['dancing', 'discoveries', 'popular'], note: 'A playful indie track with a bouncy electronic groove.' },
    { title: 'Levitating', artist: 'Dua Lipa', genre: 'Pop', mood: ['upbeat', 'adventurous'], tags: ['dancing', 'workout', 'popular'], note: 'Bright pop with a buoyant beat for moving around.' },
    { title: 'Good as Hell', artist: 'Lizzo', genre: 'Pop', mood: ['upbeat', 'adventurous'], tags: ['workout', 'dancing', 'popular'], note: 'A confident, feel-good boost with plenty of energy.' },
    { title: 'Dog Days Are Over', artist: 'Florence + The Machine', genre: 'Indie', mood: ['upbeat', 'adventurous'], tags: ['workout', 'dancing', 'traveling'], note: 'A joyful indie-rock crescendo that keeps building.' },
    { title: 'Put Your Records On', artist: 'Corinne Bailey Rae', genre: 'R&B', mood: ['calm', 'upbeat'], tags: ['relaxing', 'traveling', 'popular'], note: 'A soft, sunny R&B groove for a laid-back afternoon.' },
    { title: 'Take Five', artist: 'The Dave Brubeck Quartet', genre: 'Jazz', mood: ['thoughtful', 'adventurous'], tags: ['studying', 'discoveries', 'genres'], note: 'A crisp jazz classic with a distinctive five-beat rhythm.' },
    { title: 'Experience', artist: 'Ludovico Einaudi', genre: 'Classical', mood: ['thoughtful', 'calm'], tags: ['studying', 'relaxing', 'genres'], note: 'A gradual piano-and-strings piece that grows in intensity.' },
    { title: 'Feel Good Inc.', artist: 'Gorillaz', genre: 'Alternative', mood: ['upbeat', 'adventurous'], tags: ['workout', 'dancing', 'genres'], note: 'An inventive mix of alt-rock, hip-hop, and a catchy bass line.' },
    { title: 'Holocene', artist: 'Bon Iver', genre: 'Indie', mood: ['thoughtful', 'low-key'], tags: ['relaxing', 'studying', 'discoveries'], note: 'A layered, intimate indie-folk song for a reflective mood.' },
    { title: 'Intro', artist: 'The xx', genre: 'Indie', mood: ['calm', 'thoughtful'], tags: ['studying', 'relaxing', 'discoveries'], note: 'Minimal, atmospheric guitar and beat with lots of breathing room.' },
    { title: 'Titanium', artist: 'David Guetta ft. Sia', genre: 'Electronic', mood: ['upbeat', 'adventurous'], tags: ['workout', 'dancing', 'popular'], note: 'A powerful electronic pop track with a big, uplifting chorus.' },
    { title: 'The Four Seasons: Spring', artist: 'Antonio Vivaldi', genre: 'Classical', mood: ['upbeat', 'adventurous'], tags: ['studying', 'genres', 'discoveries'], note: 'A lively orchestral concerto inspired by the season of spring.' },
    { title: 'Redbone', artist: 'Childish Gambino', genre: 'R&B', mood: ['thoughtful', 'low-key'], tags: ['relaxing', 'genres', 'discoveries'], note: 'A hazy, soulful R&B sound with a distinctive retro feel.' },
    { title: 'Midnight City', artist: 'M83', genre: 'Electronic', mood: ['adventurous', 'upbeat'], tags: ['traveling', 'dancing', 'discoveries'], note: 'Shimmering synths and a big night-drive atmosphere.' },
    { title: 'Fix You', artist: 'Coldplay', genre: 'Rock', mood: ['thoughtful', 'calm'], tags: ['relaxing', 'popular', 'traveling'], note: 'A gentle beginning that gradually opens into a soaring finale.' },
    { title: 'Lovely Day', artist: 'Bill Withers', genre: 'R&B', mood: ['upbeat', 'low-key'], tags: ['traveling', 'relaxing', 'popular'], note: 'An easy soul groove with a bright, cheerful feel.' },
    { title: 'Take On Me', artist: 'a-ha', genre: 'Pop', mood: ['upbeat', 'adventurous'], tags: ['dancing', 'workout', 'popular'], note: 'An energetic synth-pop classic with a memorable melody.' },
    { title: 'Gymnopédie No. 1', artist: 'Erik Satie', genre: 'Classical', mood: ['calm', 'thoughtful'], tags: ['studying', 'relaxing', 'genres'], note: 'A spare, unhurried piano piece with a peaceful atmosphere.' },
  ];

  const genres = {
    pop: { name: 'Pop', description: 'Melodic, approachable songs built around memorable hooks and a strong chorus.', examples: 'Try Dua Lipa · “Levitating” or a-ha · “Take On Me”.' },
    indie: { name: 'Indie', description: 'A broad home for independent-minded sounds, from intimate guitar songs to inventive production.', examples: 'Try Bon Iver · “Holocene” or MGMT · “Electric Feel”.' },
    jazz: { name: 'Jazz', description: 'Expressive music shaped by improvisation, rich harmony, and rhythms that love to surprise.', examples: 'Try Dave Brubeck · “Take Five”.' },
    classical: { name: 'Classical', description: 'Orchestral and instrumental traditions spanning delicate piano pieces to sweeping compositions.', examples: 'Try Debussy · “Clair de Lune” or Vivaldi · “Spring”.' },
    hiphop: { name: 'Hip-hop', description: 'Rhythm-led music built around beats, wordplay, storytelling, and a wide range of sounds.', examples: 'Explore artists such as A Tribe Called Quest and Little Simz.' },
    electronic: { name: 'Electronic', description: 'Music made with synthesizers, samplers, and electronic production, from ambient to dance-floor energy.', examples: 'Try Petit Biscuit · “Sunset Lover” or M83 · “Midnight City”.' },
    rock: { name: 'Rock', description: 'A wide-ranging style often driven by guitars, bass, drums, and big expressive melodies.', examples: 'Try Fleetwood Mac · “Dreams” or The Beatles · “Here Comes the Sun”.' },
    rnb: { name: 'R&B', description: 'A soulful sound centered on expressive vocals, smooth grooves, and rich harmonies.', examples: 'Try Corinne Bailey Rae · “Put Your Records On” or Childish Gambino · “Redbone”.' },
  };

  const collections = {
    discoveries: { title: 'New discoveries', tags: ['discoveries', 'genres'] },
    popular: { title: 'Popular songs', tags: ['popular'] },
    genres: { title: 'Different genres', tags: ['genres'] },
    studying: { title: 'Songs for studying', tags: ['studying'] },
    relaxing: { title: 'Songs for relaxing', tags: ['relaxing'] },
    workout: { title: 'Songs for working out', tags: ['workout'] },
    traveling: { title: 'Songs for traveling', tags: ['traveling'] },
    dancing: { title: 'Songs for dancing', tags: ['dancing'] },
  };

  const genreSelect = musicSection.querySelector('#genre-select');
  const genreResult = musicSection.querySelector('#genre-result');
  const renderGenre = () => {
    const genre = genres[genreSelect.value];
    genreResult.replaceChildren();
    const title = document.createElement('h4');
    title.textContent = genre.name;
    const description = document.createElement('p');
    description.textContent = genre.description;
    const examples = document.createElement('p');
    examples.className = 'genre-examples';
    examples.textContent = genre.examples;
    genreResult.append(title, description, examples);
  };

  renderGenre();
  genreSelect.addEventListener('change', renderGenre);

  const dateStamp = new Date();
  const dayIndex = Math.floor(Date.UTC(dateStamp.getFullYear(), dateStamp.getMonth(), dateStamp.getDate()) / 86400000) % musicCatalog.length;
  const songOfDay = musicCatalog[dayIndex];
  musicSection.querySelector('#song-day-title').textContent = songOfDay.title;
  musicSection.querySelector('#song-day-artist').textContent = songOfDay.artist;
  musicSection.querySelector('#song-day-note').textContent = songOfDay.note;

  const renderSongResults = (container, heading, songs) => {
    container.replaceChildren();
    const title = document.createElement('h4');
    title.textContent = heading;
    const list = document.createElement('ul');
    list.className = 'music-song-list';
    songs.forEach((song) => {
      const item = document.createElement('li');
      const songName = document.createElement('strong');
      songName.textContent = song.title;
      const artist = document.createElement('span');
      artist.textContent = `${song.artist} · ${song.genre}`;
      item.append(songName, artist);
      list.append(item);
    });
    container.append(title, list);
    container.hidden = false;
  };

  const randomSongResult = musicSection.querySelector('#random-song-result');
  musicSection.querySelector('#random-song-button').addEventListener('click', () => {
    const song = musicCatalog[Math.floor(Math.random() * musicCatalog.length)];
    randomSongResult.replaceChildren();
    const title = document.createElement('strong');
    title.textContent = `${song.title} — ${song.artist}`;
    const note = document.createElement('span');
    note.textContent = song.note;
    randomSongResult.append(title, note);
  });

  const collectionResults = musicSection.querySelector('#collection-results');
  musicSection.querySelectorAll('[data-music-collection]').forEach((button) => {
    button.addEventListener('click', () => {
      const collection = collections[button.dataset.musicCollection];
      const matchingSongs = musicCatalog.filter((song) => collection.tags.some((tag) => song.tags.includes(tag))).slice(0, 3);
      renderSongResults(collectionResults, collection.title, matchingSongs);
    });
  });

  const findSongForm = musicSection.querySelector('#find-song-form');
  findSongForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const category = musicSection.querySelector('#find-song-category').value;
    const artist = musicSection.querySelector('#find-song-artist').value.trim().toLowerCase();
    const description = musicSection.querySelector('#find-song-description').value.trim().toLowerCase();
    let matches = musicCatalog.filter((song) => song.tags.includes(category) || song.mood.includes(category));

    if (category === 'similar') {
      const artistSong = artist
        ? musicCatalog.find((song) => song.artist.toLowerCase().includes(artist) || song.title.toLowerCase().includes(artist))
        : null;
      matches = artistSong
        ? musicCatalog.filter((song) => song.genre === artistSong.genre && song !== artistSong)
        : musicCatalog.filter((song) => song.tags.includes('discoveries'));
    } else if (category === 'sad') {
      matches = musicCatalog.filter((song) => song.mood.includes('thoughtful') && !song.tags.includes('studying'));
    }

    if (description.includes('energetic') || description.includes('dance')) {
      matches = musicCatalog.filter((song) => song.tags.includes('dancing') || song.tags.includes('workout'));
    } else if (description.includes('calm') || description.includes('slow')) {
      matches = musicCatalog.filter((song) => song.mood.includes('calm'));
    }

    const results = musicSection.querySelector('#find-song-results');
    renderSongResults(results, 'A few songs to try', matches.slice(0, 3));
  });

  const recommendationForm = musicSection.querySelector('#recommendation-form');
  recommendationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const favorite = musicSection.querySelector('#recommendation-favorite').value.trim();
    const genre = musicSection.querySelector('#recommendation-genre').value;
    const mood = musicSection.querySelector('#recommendation-mood').value;
    const style = musicSection.querySelector('#recommendation-style').value;
    const kind = musicSection.querySelector('#recommendation-kind').value.trim().toLowerCase();
    const anchorSong = musicCatalog.find((song) => song.artist.toLowerCase().includes(favorite.toLowerCase()) || song.title.toLowerCase().includes(favorite.toLowerCase()));
    const targetGenre = style === 'different'
      ? musicCatalog.find((song) => song.genre.toLowerCase() !== genre.toLowerCase() && song.mood.includes(mood))?.genre
      : anchorSong?.genre || genre;
    let matches = musicCatalog.filter((song) => song.genre.toLowerCase() === targetGenre.toLowerCase() && song.mood.includes(mood));
    if (!matches.length) matches = musicCatalog.filter((song) => song.genre.toLowerCase() === targetGenre.toLowerCase());
    if (!matches.length) matches = musicCatalog.filter((song) => song.mood.includes(mood));
    if (kind.includes('study') || kind.includes('focus')) matches = musicCatalog.filter((song) => song.tags.includes('studying'));
    if (kind.includes('dance') || kind.includes('energy')) matches = musicCatalog.filter((song) => song.tags.includes('dancing') || song.tags.includes('workout'));
    if (kind.includes('relax') || kind.includes('calm')) matches = musicCatalog.filter((song) => song.tags.includes('relaxing'));
    if (style === 'different' && matches.every((song) => song.genre.toLowerCase() === genre.toLowerCase())) {
      matches = musicCatalog.filter((song) => song.genre.toLowerCase() !== genre.toLowerCase() && song.mood.includes(mood));
    }
    renderSongResults(musicSection.querySelector('#recommendation-results'), 'Your listening ideas', matches.slice(0, 3));
    const saved = addMusicRequest({
      type: 'recommendation',
      title: favorite,
      artist: '',
      genre,
      details: `Mood: ${mood}. Looking for: ${musicSection.querySelector('#recommendation-kind').value.trim()}. ${style === 'similar' ? 'Similar sound requested.' : 'A different sound requested.'}`,
      recommendations: matches.slice(0, 3).map((song) => `${song.title} — ${song.artist}`),
      status: 'Recommended',
    });
    if (saved) recommendationForm.reset();
  });

  const storageKey = 'lumora-music-requests-v1';
  const requestList = musicSection.querySelector('#music-request-list');
  const storageError = musicSection.querySelector('#music-storage-error');
  let requests = [];
  let storageReady = true;

  const showStorageError = (message) => {
    storageReady = false;
    storageError.textContent = message;
    storageError.hidden = false;
    musicSection.querySelectorAll('form button[type="submit"], [data-request-action]').forEach((control) => {
      control.disabled = true;
    });
  };

  const storeRequests = (nextRequests) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(nextRequests));
      requests = nextRequests;
      return true;
    } catch {
      showStorageError('Your browser could not save this request. Check its storage settings and try again.');
      return false;
    }
  };

  const createRequestElement = (request) => {
    const card = document.createElement('article');
    card.className = 'music-request-card';
    const header = document.createElement('div');
    header.className = 'music-request-header';
    const info = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = request.type === 'song' ? `${request.title} — ${request.artist}` : `Recommendation request: ${request.title}`;
    const meta = document.createElement('p');
    meta.textContent = request.type === 'song' ? `${request.genre} · Song submission` : request.details;
    info.append(title, meta);
    const status = document.createElement('span');
    status.className = `request-status status-${request.status.toLowerCase()}`;
    status.textContent = request.status;
    header.append(info, status);
    card.append(header);

    if (request.type === 'song') {
      const details = document.createElement('p');
      details.className = 'request-details';
      details.textContent = [
        request.why ? `Why they like it: ${request.why}` : '',
        request.feedback ? `Feedback requested: ${request.feedback}` : '',
        request.ratingRequested ? 'Rating requested.' : '',
        request.recommendationRequested ? 'Recommendation requested.' : '',
      ].filter(Boolean).join(' · ');
      if (details.textContent) card.append(details);

      const ratingForm = document.createElement('form');
      ratingForm.className = 'request-rating-form';
      const ratingLabel = document.createElement('label');
      ratingLabel.textContent = 'Your rating';
      const ratingSelect = document.createElement('select');
      ratingSelect.setAttribute('aria-label', `Rating for ${request.title}`);
      ratingSelect.innerHTML = '<option value="">Rate 1–10</option>';
      for (let rating = 1; rating <= 10; rating += 1) {
        const option = document.createElement('option');
        option.value = String(rating);
        option.textContent = `${rating} / 10`;
        ratingSelect.append(option);
      }
      if (request.rating) ratingSelect.value = String(request.rating);
      ratingLabel.append(ratingSelect);
      const commentLabel = document.createElement('label');
      commentLabel.textContent = 'Optional comment';
      const comment = document.createElement('input');
      comment.type = 'text';
      comment.maxLength = 220;
      comment.value = request.comment || '';
      comment.placeholder = 'Something you liked about it';
      commentLabel.append(comment);
      const rateButton = document.createElement('button');
      rateButton.type = 'submit';
      rateButton.className = 'request-save-button';
      rateButton.dataset.requestAction = 'true';
      rateButton.textContent = 'Save rating';
      ratingForm.append(ratingLabel, commentLabel, rateButton);
      ratingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!storageReady || !ratingSelect.value) return;
        const updated = requests.map((item) => item.id === request.id
          ? { ...item, rating: Number(ratingSelect.value), comment: comment.value.trim(), status: item.status === 'New' ? 'Answered' : item.status }
          : item);
        if (storeRequests(updated)) renderRequests();
      });
      card.append(ratingForm);
    } else if (request.recommendations?.length) {
      const ideas = document.createElement('p');
      ideas.className = 'request-details';
      ideas.textContent = `Recommended: ${request.recommendations.join(' · ')}`;
      card.append(ideas);
    }

    const statusLabel = document.createElement('label');
    statusLabel.className = 'request-status-control';
    statusLabel.textContent = 'Request status';
    const statusSelect = document.createElement('select');
    statusSelect.setAttribute('aria-label', `Status for ${request.title}`);
    ['New', 'Answered', 'Recommended'].forEach((value) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      statusSelect.append(option);
    });
    statusSelect.value = request.status;
    statusSelect.dataset.requestAction = 'true';
    statusSelect.addEventListener('change', () => {
      if (!storageReady) return;
      const updated = requests.map((item) => item.id === request.id ? { ...item, status: statusSelect.value } : item);
      if (storeRequests(updated)) renderRequests();
    });
    statusLabel.append(statusSelect);
    card.append(statusLabel);
    return card;
  };

  const renderRequests = () => {
    requestList.replaceChildren();
    if (!requests.length) {
      const empty = document.createElement('p');
      empty.className = 'requests-empty';
      empty.textContent = 'No music requests yet. Share a song or ask for a recommendation to get started.';
      requestList.append(empty);
      return;
    }
    requests.forEach((request) => requestList.append(createRequestElement(request)));
  };

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed) || parsed.some((request) => !request || typeof request.id !== 'string' || typeof request.title !== 'string' || !['song', 'recommendation'].includes(request.type) || !['New', 'Answered', 'Recommended'].includes(request.status))) {
        throw new Error('Saved music requests are not in the expected format.');
      }
      requests = parsed;
    }
  } catch {
    showStorageError('Music requests could not be loaded from this browser. Existing saved data was left untouched.');
  }

  const addMusicRequest = (request) => {
    if (!storageReady) return false;
    const newRequest = {
      ...request,
      id: `request-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
    };
    const nextRequests = [newRequest, ...requests];
    const saved = storeRequests(nextRequests);
    if (saved) renderRequests();
    return saved;
  };

  const submissionForm = musicSection.querySelector('#song-submission-form');
  submissionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!storageReady) return;
    const formData = new FormData(submissionForm);
    const submission = {
      type: 'song',
      title: String(formData.get('title')).trim(),
      artist: String(formData.get('artist')).trim(),
      genre: String(formData.get('genre')),
      why: String(formData.get('why')).trim(),
      feedback: String(formData.get('feedback')).trim(),
      ratingRequested: formData.has('ratingRequested'),
      recommendationRequested: formData.has('recommendationRequested'),
      status: 'New',
    };
    if (addMusicRequest(submission)) {
      submissionForm.reset();
      musicSection.querySelector('#submission-message').textContent = 'Song added anonymously to My Music Requests on this browser.';
    }
  });

  renderRequests();
}

const communitySection = document.querySelector('.community-section');

if (communitySection) {
  const storageKey = 'lumora-community-demo-v1';
  const rooms = ['Study', 'Music', 'Languages', 'Travel', 'Games', 'Random'];
  const seedPosts = [
    { id: 'welcome-world', author: 'Sky', country: 'Canada', room: 'Random', text: 'What is a tiny thing that made you smile this week?', seeded: true },
    { id: 'welcome-music', author: 'Mika', country: 'Japan', room: 'Music', text: 'I have been exploring movie soundtracks lately. What kind of music helps you focus?', seeded: true },
    { id: 'welcome-study', author: 'River', country: 'New Zealand', room: 'Study', text: 'A reminder that taking a short break is part of studying, too. What is your favorite study break?', seeded: true },
    { id: 'welcome-travel', author: 'Sol', country: 'Spain', room: 'Travel', text: 'If you could learn about one place today, where would you explore?', seeded: true },
  ];
  const seedQuestions = [
    {
      id: 'question-seed-1',
      author: 'Fern',
      room: 'Languages',
      text: 'What is a friendly phrase you like in another language?',
      seeded: true,
      replies: [
        { id: 'reply-seed-1', author: 'Mika', text: 'In Japanese, “おつかれさま” (otsukaresama) is a kind way to recognize someone’s effort.', helpful: 2, seeded: true },
      ],
    },
    {
      id: 'question-seed-2',
      author: 'Bluebird',
      room: 'Study',
      text: 'What helps you remember something you have just learned?',
      seeded: true,
      replies: [
        { id: 'reply-seed-2', author: 'River', text: 'I try explaining it in my own words, then come back to it tomorrow.', helpful: 1, seeded: true },
      ],
    },
  ];
  const seedPhrases = [
    { id: 'phrase-seed-1', language: 'Spanish', author: 'Sol', phrase: '¡Qué tengas un buen día!', meaning: 'Have a lovely day!' },
    { id: 'phrase-seed-2', language: 'Japanese', author: 'Mika', phrase: 'ありがとう (arigatō)', meaning: 'Thank you' },
  ];

  let state = {
    intro: null,
    posts: [],
    questions: [],
    phrases: [],
    muted: [],
    reported: [],
    helpful: [],
  };
  let activeRoom = 'All';
  let stateReady = true;

  const makeId = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const currentNickname = () => state.intro?.nickname || 'Lumora learner';
  const announce = (selector, message) => {
    const status = communitySection.querySelector(selector);
    if (status) status.textContent = message;
  };

  const loadState = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return;
      const parsed = JSON.parse(saved);
      const isValid = parsed
        && typeof parsed === 'object'
        && (parsed.intro === null || (
          typeof parsed.intro?.nickname === 'string'
          && typeof parsed.intro?.country === 'string'
          && typeof parsed.intro?.interests === 'string'
        ))
        && ['posts', 'questions', 'phrases', 'muted', 'reported', 'helpful'].every((key) => Array.isArray(parsed[key]))
        && parsed.posts.every((post) => post && typeof post.id === 'string' && typeof post.author === 'string' && typeof post.text === 'string' && rooms.includes(post.room))
        && parsed.questions.every((question) => question && typeof question.id === 'string' && typeof question.author === 'string' && typeof question.text === 'string' && rooms.includes(question.room) && Array.isArray(question.replies) && question.replies.every((reply) => reply && typeof reply.id === 'string' && typeof reply.author === 'string' && typeof reply.text === 'string' && Number.isFinite(reply.helpful)))
        && parsed.phrases.every((phrase) => phrase && typeof phrase.id === 'string' && typeof phrase.author === 'string' && typeof phrase.phrase === 'string' && typeof phrase.meaning === 'string' && typeof phrase.language === 'string')
        && parsed.muted.every((nickname) => typeof nickname === 'string')
        && parsed.reported.every((id) => typeof id === 'string')
        && parsed.helpful.every((id) => typeof id === 'string');
      if (!isValid) throw new Error('Saved community data is invalid.');
      state = { ...state, ...parsed };
    } catch {
      stateReady = false;
      announce('.safety-status', 'Community data could not be loaded or saved in this browser. Existing data was left untouched.');
      communitySection.querySelectorAll('form button[type="submit"]').forEach((button) => {
        button.disabled = true;
      });
    }
  };

  const saveState = () => {
    if (!stateReady) return false;
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      return true;
    } catch {
      stateReady = false;
      announce('.safety-status', 'Your browser could not save this change. Check its storage settings; existing data was left untouched.');
      communitySection.querySelectorAll('form button[type="submit"]').forEach((button) => {
        button.disabled = true;
      });
      return false;
    }
  };

  const isMuted = (nickname) => state.muted.some((name) => name.toLowerCase() === nickname.toLowerCase());
  const isReported = (id) => state.reported.includes(id);
  const markHelpful = (id) => state.helpful.includes(id);
  const markIdHelpful = (id) => {
    state.helpful = markHelpful(id) ? state.helpful.filter((item) => item !== id) : [...state.helpful, id];
    saveState();
    renderQuestions();
  };

  const textElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  };

  const createSafetyButton = (label, action, id, author) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'community-post-action';
    button.textContent = label;
    button.addEventListener('click', () => {
      if (action === 'report') {
        if (!state.reported.includes(id)) state.reported.push(id);
        if (saveState()) {
          announce('.safety-status', 'Post hidden from this browser. No report was sent to a moderator.');
          renderPosts();
          renderQuestions();
          renderPhrases();
        }
      } else if (action === 'mute') {
        if (!isMuted(author)) state.muted.push(author);
        if (saveState()) {
          announce('.safety-status', `${author} is muted on this device. Their posts are hidden from your view.`);
          renderPosts();
          renderQuestions();
          renderPhrases();
          renderMuted();
        }
      }
    });
    return button;
  };

  const addPostCard = (post, feed) => {
    if (isMuted(post.author) || isReported(post.id) || (activeRoom !== 'All' && post.room !== activeRoom)) return;
    const card = document.createElement('article');
    card.className = 'community-post-card';
    const header = document.createElement('div');
    header.className = 'community-post-header';
    const authorBlock = document.createElement('div');
    authorBlock.className = 'community-post-author';
    authorBlock.append(
      textElement('span', 'community-avatar', post.author.slice(0, 1).toUpperCase()),
      textElement('strong', '', post.author),
      textElement('span', 'community-country', post.country ? `· ${post.country}` : ''),
    );
    const room = textElement('span', 'community-room-tag', post.room);
    header.append(authorBlock, room);
    card.append(header, textElement('p', 'community-post-text', post.text));
    if (post.interests) card.append(textElement('p', 'community-post-interests', `Into: ${post.interests}`));
    const actions = document.createElement('div');
    actions.className = 'community-post-actions';
    actions.append(
      textElement('span', 'community-demo-label', post.seeded ? 'Sample conversation' : 'Local preview'),
      createSafetyButton('Report', 'report', post.id, post.author),
      createSafetyButton('Mute', 'mute', post.id, post.author),
    );
    card.append(actions);
    feed.append(card);
  };

  function renderPosts() {
    const feed = communitySection.querySelector('#world-chat-feed');
    feed.replaceChildren();
    [...state.posts, ...seedPosts].forEach((post) => addPostCard(post, feed));
    if (!feed.childElementCount) {
      feed.append(textElement('p', 'community-empty-state', activeRoom === 'All' ? 'No posts here yet. Start a kind conversation.' : `No posts in ${activeRoom} yet. You can start the conversation.`));
    }
    updateMuteOptions();
  }

  function addReplyControls(question) {
    const form = document.createElement('form');
    form.className = 'community-reply-form';
    const input = document.createElement('input');
    input.name = 'reply';
    input.required = true;
    input.maxLength = 300;
    input.setAttribute('aria-label', `Public reply to ${question.author}'s question`);
    input.placeholder = 'Add a helpful public reply…';
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.className = 'community-secondary-button';
    submit.textContent = 'Reply';
    form.append(input, submit);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!stateReady) return;
      const value = input.value.trim();
      if (!value) return;
      const target = state.questions.find((item) => item.id === question.id);
      if (!target) return;
      target.replies.push({ id: makeId('reply'), author: currentNickname(), text: value, helpful: 0 });
      if (saveState()) renderQuestions();
    });
    return form;
  }

  function renderQuestions() {
    const feed = communitySection.querySelector('#community-question-feed');
    feed.replaceChildren();
    [...state.questions, ...seedQuestions].forEach((question) => {
      if (isMuted(question.author) || isReported(question.id)) return;
      const card = document.createElement('article');
      card.className = 'community-question-card';
      const header = document.createElement('div');
      header.className = 'community-post-header';
      header.append(
        textElement('strong', 'community-question-author', question.author),
        textElement('span', 'community-room-tag', question.room),
      );
      card.append(header, textElement('h4', 'community-question-text', question.text));
      const questionActions = document.createElement('div');
      questionActions.className = 'community-post-actions';
      questionActions.append(
        textElement('span', 'community-demo-label', question.seeded ? 'Sample question' : 'Local preview'),
        createSafetyButton('Report', 'report', question.id, question.author),
        createSafetyButton('Mute', 'mute', question.id, question.author),
      );
      card.append(questionActions);

      question.replies.forEach((reply) => {
        if (isMuted(reply.author) || isReported(reply.id)) return;
        const answer = document.createElement('div');
        answer.className = 'community-answer';
        answer.append(
          textElement('strong', '', reply.author),
          textElement('p', '', reply.text),
        );
        const answerActions = document.createElement('div');
        answerActions.className = 'community-post-actions';
        const helpful = document.createElement('button');
        helpful.type = 'button';
        helpful.className = `community-post-action helpful-action${markHelpful(reply.id) ? ' is-helpful' : ''}`;
        helpful.textContent = `${markHelpful(reply.id) ? '✓ Helpful' : '♡ Helpful'} · ${reply.helpful + Number(markHelpful(reply.id))}`;
        helpful.setAttribute('aria-pressed', String(markHelpful(reply.id)));
        helpful.addEventListener('click', () => markIdHelpful(reply.id));
        answerActions.append(helpful, createSafetyButton('Report', 'report', reply.id, reply.author), createSafetyButton('Mute', 'mute', reply.id, reply.author));
        answer.append(answerActions);
        card.append(answer);
      });

      card.append(addReplyControls(question));
      feed.append(card);
    });
    if (!feed.childElementCount) feed.append(textElement('p', 'community-empty-state', 'No questions here yet. Ask the first one.'));
    updateMuteOptions();
  }

  function updateMuteOptions() {
    const select = communitySection.querySelector('#mute-nickname');
    const selected = select.value;
    const authors = [...new Set([
      ...state.posts.map((post) => post.author),
      ...seedPosts.map((post) => post.author),
      ...state.questions.flatMap((question) => [question.author, ...question.replies.map((reply) => reply.author)]),
      ...seedQuestions.flatMap((question) => [question.author, ...question.replies.map((reply) => reply.author)]),
    ])].filter((author) => !isMuted(author));
    select.replaceChildren(new Option('Choose a nickname to mute', ''), ...authors.map((author) => new Option(author, author)));
    if (authors.includes(selected)) select.value = selected;
  }

  function renderMuted() {
    const list = communitySection.querySelector('#muted-list');
    list.replaceChildren();
    state.muted.forEach((nickname) => {
      const chip = document.createElement('span');
      chip.className = 'muted-chip';
      chip.append(textElement('span', '', `Muted: ${nickname}`));
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = 'Unmute';
      button.addEventListener('click', () => {
        state.muted = state.muted.filter((name) => name !== nickname);
        if (saveState()) {
          announce('.safety-status', `${nickname} has been unmuted on this device.`);
          renderPosts();
          renderQuestions();
          renderPhrases();
          renderMuted();
        }
      });
      chip.append(button);
      list.append(chip);
    });
  }

  loadState();

  const introForm = communitySection.querySelector('#intro-form');
  const introPreview = communitySection.querySelector('#intro-preview');
  const renderIntro = () => {
    if (!state.intro) {
      introPreview.hidden = true;
      return;
    }
    introPreview.replaceChildren(
      textElement('strong', '', state.intro.nickname),
      textElement('span', '', [state.intro.country, state.intro.interests].filter(Boolean).join(' · ') || 'Here to learn and share'),
    );
    introPreview.hidden = false;
    communitySection.querySelector('#intro-nickname').value = state.intro.nickname;
    communitySection.querySelector('#intro-country').value = state.intro.country;
    communitySection.querySelector('#intro-interests').value = state.intro.interests;
  };

  introForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!stateReady) return;
    const formData = new FormData(introForm);
    state.intro = {
      nickname: String(formData.get('nickname')).trim(),
      country: String(formData.get('country')),
      interests: String(formData.get('interests')).trim(),
    };
    if (!state.intro.nickname) return;
    if (saveState()) {
      renderIntro();
      renderPosts();
      renderQuestions();
      renderPhrases();
      announce('#intro-status', 'Your nickname-only introduction is saved on this device.');
    }
  });
  renderIntro();

  const roomFilters = communitySection.querySelectorAll('.room-filter');
  roomFilters.forEach((button) => {
    button.addEventListener('click', () => {
      activeRoom = button.dataset.room;
      roomFilters.forEach((filter) => {
        const isActive = filter === button;
        filter.classList.toggle('is-active', isActive);
        filter.setAttribute('aria-pressed', String(isActive));
      });
      renderPosts();
    });
  });

  communitySection.querySelector('#world-chat-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!stateReady) return;
    const message = communitySection.querySelector('#world-chat-message').value.trim();
    if (!message) return;
    const room = communitySection.querySelector('#world-chat-room').value;
    if (!rooms.includes(room)) return;
    state.posts.unshift({
      id: makeId('post'),
      author: currentNickname(),
      country: state.intro?.country || '',
      interests: state.intro?.interests || '',
      room,
      text: message,
    });
    if (saveState()) {
      event.currentTarget.reset();
      renderPosts();
      announce('#world-chat-message-status', 'Posted to this browser’s local preview. Other visitors cannot see it.');
    }
  });

  communitySection.querySelector('#community-question-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!stateReady) return;
    const input = communitySection.querySelector('#community-question-input');
    const question = input.value.trim();
    const room = communitySection.querySelector('#community-question-room').value;
    if (!question || !rooms.includes(room)) return;
    state.questions.unshift({ id: makeId('question'), author: currentNickname(), room, text: question, replies: [] });
    if (saveState()) {
      event.currentTarget.reset();
      renderQuestions();
      announce('#community-question-status', 'Question added to this browser’s local preview. Other visitors cannot see it.');
    }
  });

  communitySection.querySelector('#mute-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const select = communitySection.querySelector('#mute-nickname');
    const nickname = select.value;
    if (!nickname || isMuted(nickname)) return;
    state.muted.push(nickname);
    if (saveState()) {
      announce('.safety-status', `${nickname} is muted on this device. Their posts are hidden from your view.`);
      renderPosts();
      renderQuestions();
      renderPhrases();
      renderMuted();
    }
  });

  const languagePhrases = {
    Spanish: { phrase: '¡Buen provecho!', meaning: 'Enjoy your meal!' },
    French: { phrase: 'À bientôt !', meaning: 'See you soon!' },
    Japanese: { phrase: 'よろしくお願いします (yoroshiku onegaishimasu)', meaning: 'A polite phrase for asking for a good relationship or cooperation.' },
    German: { phrase: 'Viel Erfolg!', meaning: 'Good luck / best of success!' },
    Italian: { phrase: 'Che bello!', meaning: 'How lovely!' },
    English: { phrase: 'Nice to meet you!', meaning: 'A friendly greeting when meeting someone.' },
  };
  const phraseCard = communitySection.querySelector('#language-phrase-card');
  const languageSelect = communitySection.querySelector('#language-select');
  const renderPhrase = () => {
    const phrase = languagePhrases[languageSelect.value];
    phraseCard.replaceChildren(
      textElement('span', 'phrase-language', languageSelect.value),
      textElement('strong', '', phrase.phrase),
      textElement('span', 'phrase-meaning', phrase.meaning),
    );
  };
  languageSelect.addEventListener('change', renderPhrase);
  renderPhrase();

  const phraseFeed = communitySection.querySelector('#phrase-feed');
  const renderPhrases = () => {
    phraseFeed.replaceChildren();
    [...state.phrases, ...seedPhrases]
      .filter((phrase) => phrase.language === languageSelect.value && !isMuted(phrase.author) && !isReported(phrase.id))
      .slice(0, 4)
      .forEach((phrase) => {
        const card = document.createElement('article');
        card.className = 'shared-phrase';
        card.append(textElement('strong', '', phrase.phrase), textElement('span', '', `${phrase.meaning} · ${phrase.author}`));
        const actions = document.createElement('div');
        actions.className = 'community-post-actions';
        actions.append(createSafetyButton('Report', 'report', phrase.id, phrase.author), createSafetyButton('Mute', 'mute', phrase.id, phrase.author));
        card.append(actions);
        phraseFeed.append(card);
      });
  };
  languageSelect.addEventListener('change', renderPhrases);
  communitySection.querySelector('#phrase-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (!stateReady) return;
    const phrase = communitySection.querySelector('#phrase-text').value.trim();
    const meaning = communitySection.querySelector('#phrase-meaning').value.trim();
    if (!phrase || !meaning) return;
    state.phrases.unshift({ id: makeId('phrase'), language: languageSelect.value, author: currentNickname(), phrase, meaning });
    if (saveState()) {
      event.currentTarget.reset();
      renderPhrases();
    }
  });

  renderPosts();
  renderQuestions();
  renderPhrases();
  renderMuted();
}

const quizLobby = document.querySelector('#quiz-lobby');
const quizPlayer = document.querySelector('#quiz-player');

if (quizLobby && quizPlayer) {
  const quizCard = quizPlayer.querySelector('#quiz-game-card');
  const questionEl = quizCard.querySelector('#quiz-question');
  const categoryEl = quizCard.querySelector('.quiz-category');
  const countEl = quizCard.querySelector('#quiz-count');
  const optionsEl = quizCard.querySelector('#quiz-options');
  const feedbackEl = quizCard.querySelector('#quiz-feedback');
  const scoreEl = quizCard.querySelector('#quiz-score');
  const progressEl = quizCard.querySelector('#quiz-progress');
  const nextButton = quizCard.querySelector('#quiz-next');
  const resultActions = quizCard.querySelector('#quiz-result-actions');
  const difficultyLabel = quizPlayer.querySelector('#quiz-player-difficulty');
  const difficultyInputs = [...quizLobby.querySelectorAll('input[name="quiz-difficulty"]')];
  let selectedQuiz = null;
  let selectedDifficulty = 'Easy';
  let questionIndex = 0;
  let score = 0;
  let answered = false;
  let activeQuestions = [];

  const quizTopics = {
    math: { title: 'Math', group: 'study' },
    english: { title: 'English', group: 'study' },
    science: { title: 'Science', group: 'study' },
    geography: { title: 'Geography', group: 'world' },
    languages: { title: 'Languages', group: 'study' },
    'general-knowledge': { title: 'General Knowledge', group: 'fun' },
    'guess-country': { title: 'Guess the Country', group: 'world' },
    'guess-flag': { title: 'Guess the Flag', group: 'world' },
    capitals: { title: 'Capitals', group: 'world' },
    landmarks: { title: 'Landmarks', group: 'world' },
    culture: { title: 'Culture', group: 'world' },
    'guess-song': { title: 'Guess the Song', group: 'music' },
    'guess-artist': { title: 'Guess the Artist', group: 'music' },
    'music-genres': { title: 'Music Genres', group: 'music' },
    'k-pop': { title: 'K-pop', group: 'music' },
    'general-music': { title: 'General Music', group: 'music' },
    personality: { title: 'Personality', group: 'fun', playful: true },
    'which-one': { title: 'Which One Are You?', group: 'fun', playful: true },
    'this-or-that': { title: 'This or That', group: 'fun', playful: true },
    'would-you-rather': { title: 'Would You Rather', group: 'fun', playful: true },
    'random-trivia': { title: 'Random Trivia', group: 'fun' },
  };

  const quizBank = {
    study: {
      Easy: [
        { question: 'What is 8 × 7?', options: ['54', '56', '64'], answer: 1, explanation: 'Eight groups of seven make 56.' },
        { question: 'Which word is a noun?', options: ['Carefully', 'Bright', 'Garden'], answer: 2, explanation: 'A noun names a person, place, or thing. A garden is a place.' },
        { question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus', 'Jupiter'], answer: 0, explanation: 'Iron-rich dust gives Mars its familiar reddish color.' },
      ],
      Medium: [
        { question: 'Solve: 3x + 4 = 19.', options: ['x = 4', 'x = 5', 'x = 6'], answer: 1, explanation: 'Subtract 4 to get 3x = 15, then divide by 3: x = 5.' },
        { question: 'Which sentence is in the past tense?', options: ['I walk to school.', 'I will walk to school.', 'I walked to school.'], answer: 2, explanation: '“Walked” shows that the action has already happened.' },
        { question: 'What is the chemical symbol for oxygen?', options: ['O', 'Ox', 'Og'], answer: 0, explanation: 'O is the chemical symbol for oxygen.' },
      ],
      Challenge: [
        { question: 'A jacket costs $80 and is reduced by 15%. What is the sale price?', options: ['$65', '$68', '$72'], answer: 1, explanation: '15% of $80 is $12, and $80 − $12 = $68.' },
        { question: 'Which sentence uses a semicolon correctly?', options: ['It was late; so we went home.', 'The rain stopped; the sun came out.', 'She; walked to class.'], answer: 1, explanation: 'A semicolon can join two closely related complete sentences.' },
        { question: 'A solution has a pH of 3. What is it?', options: ['Acidic', 'Neutral', 'Alkaline'], answer: 0, explanation: 'A pH below 7 is acidic.' },
      ],
    },
    world: {
      Easy: [
        { question: 'Which country is shaped like a boot?', options: ['Italy', 'Japan', 'Peru'], answer: 0, explanation: 'Italy’s peninsula is often described as boot-shaped.' },
        { question: 'What is the capital of France?', options: ['Rome', 'Paris', 'Lisbon'], answer: 1, explanation: 'Paris is the capital of France.' },
        { question: 'The Great Wall is in which country?', options: ['China', 'India', 'Egypt'], answer: 0, explanation: 'The Great Wall is a historic series of fortifications in China.' },
      ],
      Medium: [
        { question: 'Which country’s flag features a red maple leaf?', options: ['Canada', 'Austria', 'Denmark'], answer: 0, explanation: 'The maple leaf is a well-known symbol on Canada’s flag.' },
        { question: 'What is the capital of New Zealand?', options: ['Auckland', 'Wellington', 'Christchurch'], answer: 1, explanation: 'Wellington is New Zealand’s capital city.' },
        { question: 'Machu Picchu is a famous site in which country?', options: ['Peru', 'Mexico', 'Chile'], answer: 0, explanation: 'Machu Picchu is an Inca site in the Andes of Peru.' },
      ],
      Challenge: [
        { question: 'Which country has the most natural lakes?', options: ['Canada', 'Brazil', 'Norway'], answer: 0, explanation: 'Canada has more natural lakes than any other country.' },
        { question: 'Which city is the capital of Kazakhstan?', options: ['Tashkent', 'Astana', 'Bishkek'], answer: 1, explanation: 'Astana is the capital of Kazakhstan.' },
        { question: 'The ancient city of Petra is in which country?', options: ['Jordan', 'Greece', 'Morocco'], answer: 0, explanation: 'Petra is an archaeological city in southern Jordan.' },
      ],
    },
    music: {
      Easy: [
        { question: 'Which instrument usually has black and white keys?', options: ['Piano', 'Flute', 'Drum kit'], answer: 0, explanation: 'A piano is played using rows of black and white keys.' },
        { question: 'Which group released the album “Abbey Road”?', options: ['The Beatles', 'ABBA', 'Queen'], answer: 0, explanation: '“Abbey Road” is a 1969 album by The Beatles.' },
        { question: 'Which instrument is commonly associated with a DJ?', options: ['Turntables', 'Harp', 'Cello'], answer: 0, explanation: 'DJs often use turntables or digital decks to mix tracks.' },
      ],
      Medium: [
        { question: 'Which genre is especially known for improvisation?', options: ['Jazz', 'Marching band', 'Gregorian chant'], answer: 0, explanation: 'Improvisation is an important part of many jazz traditions.' },
        { question: 'Which group performs the K-pop song “Dynamite”?', options: ['BTS', 'BLACKPINK', 'TWICE'], answer: 0, explanation: '“Dynamite” is a single by BTS.' },
        { question: 'What does a song’s tempo describe?', options: ['Its speed', 'Its language', 'Its album cover'], answer: 0, explanation: 'Tempo describes how fast or slow a piece of music is.' },
      ],
      Challenge: [
        { question: 'Which artist released the album “25”?', options: ['Adele', 'Beyoncé', 'Taylor Swift'], answer: 0, explanation: '“25” is the third studio album by English singer Adele.' },
        { question: 'Which instrument family does a saxophone belong to?', options: ['Woodwind', 'String', 'Percussion'], answer: 0, explanation: 'The saxophone is classified as a woodwind instrument, despite being made of brass.' },
        { question: 'Which K-pop group released “The Album” in 2020?', options: ['BLACKPINK', 'Red Velvet', 'ITZY'], answer: 0, explanation: '“The Album” is BLACKPINK’s debut studio album.' },
      ],
    },
    fun: {
      Easy: [
        { question: 'Which animal is known for changing color to blend in?', options: ['Chameleon', 'Penguin', 'Giraffe'], answer: 0, explanation: 'Some chameleons can change color for communication and temperature control.' },
        { question: 'How many sides does a hexagon have?', options: ['Five', 'Six', 'Eight'], answer: 1, explanation: 'A hexagon has six sides.' },
        { question: 'Which of these is a mammal?', options: ['Dolphin', 'Trout', 'Frog'], answer: 0, explanation: 'Dolphins are mammals: they breathe air and feed their young milk.' },
      ],
      Medium: [
        { question: 'What is the only even prime number?', options: ['2', '4', '6'], answer: 0, explanation: '2 is prime and the only even number with exactly two factors.' },
        { question: 'Which planet has the most visible rings?', options: ['Saturn', 'Mercury', 'Earth'], answer: 0, explanation: 'Saturn is famous for its large, bright ring system.' },
        { question: 'What is the name of a shape with eight sides?', options: ['Octagon', 'Pentagon', 'Decagon'], answer: 0, explanation: 'An octagon has eight sides.' },
      ],
      Challenge: [
        { question: 'What is the smallest prime number greater than 20?', options: ['21', '23', '25'], answer: 1, explanation: '23 has no positive divisors other than 1 and itself.' },
        { question: 'Which sea creature has three hearts?', options: ['Octopus', 'Seahorse', 'Sea turtle'], answer: 0, explanation: 'An octopus has three hearts: two pump blood to the gills and one to the body.' },
        { question: 'What is the name for a word that reads the same backward and forward?', options: ['Palindrome', 'Anagram', 'Acronym'], answer: 0, explanation: 'A palindrome, such as “level,” reads the same in both directions.' },
      ],
    },
    playful: {
      Easy: [
        { question: 'Pick your perfect little adventure.', options: ['A cozy book nook', 'A sunny beach', 'A forest path'], personal: true, explanation: 'There’s no wrong answer—your kind of fun is the right kind.' },
        { question: 'Choose a soundtrack for your day.', options: ['Soft piano', 'Upbeat pop', 'A surprise mix'], personal: true, explanation: 'Your playlist can match whatever mood you’re in.' },
        { question: 'Choose a tiny superpower.', options: ['Talk to animals', 'Pause time for a nap', 'Understand every language'], personal: true, explanation: 'A lovely choice. Imagine all the stories that power could unlock.' },
      ],
      Medium: [
        { question: 'Pick a dream day out.', options: ['Museum and café', 'Mountain and picnic', 'City lights and music'], personal: true, explanation: 'Your ideal day is the one that feels most like you.' },
        { question: 'Choose a creative sidekick.', options: ['A sketchbook', 'A camera', 'A box of colorful pens'], personal: true, explanation: 'Every creative tool opens a different little door.' },
        { question: 'Which cozy weather wins?', options: ['Rainy and warm indoors', 'Bright and breezy outside', 'Snowy with a hot drink'], personal: true, explanation: 'There’s no wrong weather when you make it your kind of day.' },
      ],
      Challenge: [
        { question: 'Choose a portal to step through.', options: ['A new planet', 'A storybook kingdom', 'A city in the future'], personal: true, explanation: 'Your imagination just picked the first stop.' },
        { question: 'Pick a curious companion.', options: ['A clever raven', 'A tiny dragon', 'A friendly robot'], personal: true, explanation: 'That sounds like the start of a very good story.' },
        { question: 'Choose a mystery to solve.', options: ['A hidden library', 'A map with no labels', 'A message from tomorrow'], personal: true, explanation: 'You’ve got a curious mind and a great mystery ahead.' },
      ],
    },
  };

  const resultActionsFor = (key) => {
    selectedQuiz = key;
    questionIndex = 0;
    score = 0;
    answered = false;
    const topic = quizTopics[key];
    const pool = topic.playful ? quizBank.playful : quizBank[topic.group];
    activeQuestions = pool[selectedDifficulty];
    resultActions.hidden = true;
    nextButton.hidden = false;
    quizLobby.hidden = true;
    quizPlayer.hidden = false;
    difficultyLabel.textContent = selectedDifficulty;
    difficultyLabel.className = `quiz-player-difficulty difficulty-${selectedDifficulty.toLowerCase()}`;
    renderQuizQuestion();
    quizPlayer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderQuizQuestion = () => {
    const topic = quizTopics[selectedQuiz];
    const question = activeQuestions[questionIndex];
    categoryEl.textContent = topic.title.toUpperCase();
    countEl.textContent = `${String(questionIndex + 1).padStart(2, '0')} / ${String(activeQuestions.length).padStart(2, '0')}`;
    questionEl.textContent = question.question;
    scoreEl.textContent = topic.playful ? `${questionIndex} playful picks so far` : `${score} ${score === 1 ? 'point' : 'points'} so far`;
    progressEl.style.width = `${((questionIndex + 1) / activeQuestions.length) * 100}%`;
    feedbackEl.textContent = '';
    feedbackEl.classList.remove('is-incorrect', 'is-personal');
    nextButton.disabled = true;
    nextButton.textContent = 'Choose an answer';
    answered = false;
    resultActions.hidden = true;
    nextButton.hidden = false;
    optionsEl.replaceChildren(...question.options.map((text, index) => {
      const option = document.createElement('button');
      option.className = 'quiz-option';
      option.type = 'button';
      const letter = document.createElement('span');
      letter.textContent = String.fromCharCode(65 + index);
      const label = document.createElement('span');
      label.textContent = text;
      const arrow = document.createElement('i');
      arrow.textContent = '↗';
      arrow.setAttribute('aria-hidden', 'true');
      option.append(letter, label, arrow);
      option.addEventListener('click', () => {
        if (answered) return;
        answered = true;
        const isPersonal = question.personal === true;
        const isCorrect = !isPersonal && index === question.answer;
        if (isCorrect) score += 1;
        optionsEl.querySelectorAll('.quiz-option').forEach((button, optionIndex) => {
          button.disabled = true;
          if (!isPersonal && optionIndex === question.answer) button.classList.add('is-correct');
          if (!isPersonal && optionIndex === index && !isCorrect) button.classList.add('is-incorrect');
          if (isPersonal && optionIndex === index) button.classList.add('is-selected');
        });
        feedbackEl.textContent = isPersonal
          ? question.explanation
          : `${isCorrect ? 'That’s right!' : 'Good guess!'} ${question.explanation}`;
        feedbackEl.classList.toggle('is-incorrect', !isCorrect && !isPersonal);
        feedbackEl.classList.toggle('is-personal', isPersonal);
        scoreEl.textContent = isPersonal ? `${questionIndex + 1} playful picks so far` : `${score} ${score === 1 ? 'point' : 'points'} so far`;
        nextButton.disabled = false;
        nextButton.textContent = questionIndex === activeQuestions.length - 1 ? 'See my result ✨' : 'Next question →';
      });
      return option;
    }));
  };

  const renderQuizResult = () => {
    const topic = quizTopics[selectedQuiz];
    const total = activeQuestions.length;
    const percentage = (score / total) * 100;
    categoryEl.textContent = 'QUIZ COMPLETE ✨';
    countEl.textContent = `${String(total).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    progressEl.style.width = '100%';
    optionsEl.replaceChildren();
    feedbackEl.classList.remove('is-incorrect');
    feedbackEl.classList.toggle('is-personal', topic.playful);
    if (topic.playful) {
      questionEl.textContent = 'Your kind of fun is looking lovely.';
      feedbackEl.textContent = `You made ${total} playful picks. Keep following what feels like you!`;
      scoreEl.textContent = `${total} / ${total} picks`;
    } else {
      questionEl.textContent = percentage === 100
        ? 'A perfect little run!'
        : percentage >= 66
          ? 'Look at you go!'
          : percentage >= 33
            ? 'Nice curious thinking!'
            : 'Every guess is a new little clue.';
      feedbackEl.textContent = `You scored ${score} out of ${total}. ${percentage >= 66 ? 'You really know your stuff.' : 'Fancy another round to see what else you discover?'}`;
      scoreEl.textContent = `${score} / ${total} points`;
    }
    nextButton.hidden = true;
    resultActions.hidden = false;
  };

  const chooseAnotherQuiz = () => {
    quizPlayer.hidden = true;
    quizLobby.hidden = false;
    quizLobby.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  difficultyInputs.forEach((input) => {
    input.addEventListener('change', () => {
      if (input.checked) selectedDifficulty = input.value;
    });
  });

  quizLobby.querySelectorAll('[data-quiz]').forEach((button) => {
    button.addEventListener('click', () => resultActionsFor(button.dataset.quiz));
  });

  quizLobby.querySelector('#quiz-surprise').addEventListener('click', () => {
    const keys = Object.keys(quizTopics);
    const previousIndex = keys.indexOf(selectedQuiz);
    let nextIndex = Math.floor(Math.random() * keys.length);
    while (keys.length > 1 && nextIndex === previousIndex) nextIndex = Math.floor(Math.random() * keys.length);
    resultActionsFor(keys[nextIndex]);
  });

  nextButton.addEventListener('click', () => {
    if (!answered) return;
    questionIndex += 1;
    if (questionIndex >= activeQuestions.length) {
      renderQuizResult();
      return;
    }
    renderQuizQuestion();
  });

  quizPlayer.querySelector('#quiz-try-again').addEventListener('click', () => resultActionsFor(selectedQuiz));
  quizPlayer.querySelector('#quiz-choose-another').addEventListener('click', chooseAnotherQuiz);
  quizPlayer.querySelector('#quiz-choose-another-result').addEventListener('click', chooseAnotherQuiz);
}

const quizCard = document.querySelector('#quiz-card');

if (quizCard) {
  const questionEl = quizCard.querySelector('#quiz-question');
  const categoryEl = quizCard.querySelector('.quiz-category');
  const countEl = quizCard.querySelector('#quiz-count');
  const optionsEl = quizCard.querySelector('#quiz-options');
  const feedbackEl = quizCard.querySelector('#quiz-feedback');
  const scoreEl = quizCard.querySelector('#quiz-score');
  const progressEl = quizCard.querySelector('#quiz-progress');
  const nextButton = quizCard.querySelector('#quiz-next');
  const subjectSelect = document.querySelector('#quiz-subject');
  const difficultySelect = document.querySelector('#quiz-difficulty');
  const startButton = document.querySelector('#quiz-start');
  let questionIndex = 0;
  let score = 0;
  let selectedAnswer = null;
  let answered = false;
  let quizQuestions = [];
  let started = false;

  const quizBank = {
    Math: {
      Easy: [
        { question: 'What is 7 + 5?', options: ['10', '12', '13'], answer: 1, explanation: '7 + 5 = 12.' },
        { question: 'What is half of 18?', options: ['8', '9', '10'], answer: 1, explanation: '18 ÷ 2 = 9.' },
        { question: 'What is 10% of 50?', options: ['5', '10', '15'], answer: 0, explanation: '10% is one tenth, and 50 ÷ 10 = 5.' },
      ],
      Medium: [
        { question: 'Solve: 3x + 2 = 14.', options: ['x = 3', 'x = 4', 'x = 5'], answer: 1, explanation: 'Subtract 2 to get 3x = 12, then divide by 3: x = 4.' },
        { question: 'What is 3/4 of 20?', options: ['12', '15', '18'], answer: 1, explanation: '20 ÷ 4 = 5, then 5 × 3 = 15.' },
        { question: 'A £40 jumper is reduced by 25%. What is the new price?', options: ['£10', '£25', '£30'], answer: 2, explanation: '25% of £40 is £10; £40 − £10 = £30.' },
      ],
      Challenge: [
        { question: 'If 2(x − 3) = 14, what is x?', options: ['7', '10', '11'], answer: 1, explanation: 'Divide by 2: x − 3 = 7. Add 3: x = 10.' },
        { question: 'A triangle has angles 48° and 67°. What is the third angle?', options: ['55°', '65°', '75°'], answer: 1, explanation: 'Angles in a triangle total 180°: 180 − 48 − 67 = 65°.' },
        { question: 'A bag has 3 red and 5 blue counters. What is the chance of red?', options: ['3/5', '3/8', '5/8'], answer: 1, explanation: 'There are 3 red counters out of 8 counters altogether, so the chance is 3/8.' },
      ],
    },
    English: {
      Easy: [
        { question: 'Which word is a noun?', options: ['Quickly', 'Garden', 'Bright'], answer: 1, explanation: 'A noun names a person, place, or thing. A garden is a place.' },
        { question: 'Choose the correct word: “___ going to the park.”', options: ['Their', 'There', 'They’re'], answer: 2, explanation: 'They’re is short for “they are”: “They are going to the park.”' },
        { question: 'Which word means almost the same as “happy”?', options: ['Cheerful', 'Careful', 'Sleepy'], answer: 0, explanation: 'Cheerful is a synonym for happy.' },
      ],
      Medium: [
        { question: 'Choose the correct past tense: “Yesterday, she ___ her book.”', options: ['finish', 'finished', 'finishes'], answer: 1, explanation: '“Yesterday” tells us it happened in the past: she finished.' },
        { question: 'Which sentence uses “their” correctly?', options: ['Their coats are blue.', 'Put it over their.', 'Their going home.'], answer: 0, explanation: 'Their shows that something belongs to them: their coats.' },
        { question: 'Which is the strongest opening for a persuasive paragraph?', options: ['I have a topic.', 'School gardens can make learning healthier and more fun.', 'There are some things.'], answer: 1, explanation: 'A clear opening states a specific point the paragraph can support.' },
      ],
      Challenge: [
        { question: 'Which sentence uses a semicolon correctly?', options: ['I packed a snack; because I was hungry.', 'The rain stopped; the sun came out.', 'She; walked home.'], answer: 1, explanation: 'A semicolon can join two closely related complete sentences.' },
        { question: 'In “Although it was late, we kept reading,” what is the subordinate clause?', options: ['Although it was late', 'we kept reading', 'it was late, we'], answer: 0, explanation: '“Although it was late” depends on the main clause to complete the thought.' },
        { question: 'Which word best completes: “The instructions were ___, so everyone understood them.”', options: ['ambiguous', 'concise', 'uncertain'], answer: 1, explanation: 'Concise means brief and clear, which fits the result in the sentence.' },
      ],
    },
    Science: {
      Easy: [
        { question: 'Which part of a plant takes in water from the soil?', options: ['Roots', 'Petals', 'Fruit'], answer: 0, explanation: 'Roots absorb water and minerals from the soil.' },
        { question: 'What force pulls objects toward Earth?', options: ['Friction', 'Gravity', 'Magnetism'], answer: 1, explanation: 'Gravity attracts objects with mass toward one another.' },
        { question: 'At what temperature does water freeze?', options: ['0°C', '10°C', '100°C'], answer: 0, explanation: 'Pure water freezes at 0°C under standard conditions.' },
      ],
      Medium: [
        { question: 'Which gas do plants take in for photosynthesis?', options: ['Oxygen', 'Carbon dioxide', 'Hydrogen'], answer: 1, explanation: 'Plants use carbon dioxide, water, and light to make sugars in photosynthesis.' },
        { question: 'Which particle has a negative electrical charge?', options: ['Proton', 'Neutron', 'Electron'], answer: 2, explanation: 'Electrons have a negative charge; protons are positive and neutrons are neutral.' },
        { question: 'What is the name for a change from liquid to gas?', options: ['Condensation', 'Evaporation', 'Freezing'], answer: 1, explanation: 'Evaporation is when particles at a liquid’s surface become a gas.' },
      ],
      Challenge: [
        { question: 'A 12 V battery is connected to a 4 Ω resistor. What current flows?', options: ['3 A', '8 A', '48 A'], answer: 0, explanation: 'Ohm’s law is V = IR, so I = V ÷ R = 12 ÷ 4 = 3 A.' },
        { question: 'Which cell structure releases energy from glucose?', options: ['Nucleus', 'Mitochondrion', 'Cell membrane'], answer: 1, explanation: 'Mitochondria are the main site of aerobic respiration in cells.' },
        { question: 'A solution has pH 3. Is it acidic, neutral, or alkaline?', options: ['Acidic', 'Neutral', 'Alkaline'], answer: 0, explanation: 'A pH below 7 is acidic; pH 7 is neutral and above 7 is alkaline.' },
      ],
    },
  };

  const renderQuestion = () => {
    const question = quizQuestions[questionIndex];
    categoryEl.textContent = `${subjectSelect.value.toUpperCase()} · ${difficultySelect.value.toUpperCase()}`;
    countEl.textContent = `${String(questionIndex + 1).padStart(2, '0')} / ${String(quizQuestions.length).padStart(2, '0')}`;
    questionEl.textContent = question.question;
    scoreEl.textContent = `${score} ${score === 1 ? 'little win' : 'little wins'} so far`;
    progressEl.style.width = `${((questionIndex + 1) / quizQuestions.length) * 100}%`;
    feedbackEl.textContent = '';
    feedbackEl.classList.remove('is-incorrect');
    nextButton.disabled = !started;
    nextButton.innerHTML = 'Check answer <span aria-hidden="true">→</span>';
    selectedAnswer = null;
    answered = false;
    optionsEl.replaceChildren(...question.options.map((optionText, index) => {
      const button = document.createElement('button');
      button.className = 'quiz-option';
      button.type = 'button';
      button.dataset.answer = String(index);

      const letter = document.createElement('span');
      letter.textContent = String.fromCharCode(65 + index);
      const label = document.createElement('span');
      label.textContent = optionText;
      const arrow = document.createElement('i');
      arrow.textContent = '↗';
      arrow.setAttribute('aria-hidden', 'true');

      button.append(letter, label, arrow);
      button.addEventListener('click', () => {
        if (answered || !started) return;
        selectedAnswer = index;
        optionsEl.querySelectorAll('.quiz-option').forEach((item) => {
          item.classList.toggle('is-selected', item === button);
        });
        nextButton.disabled = false;
      });
      return button;
    }));
  };

  const beginQuiz = () => {
    quizQuestions = quizBank[subjectSelect.value][difficultySelect.value];
    questionIndex = 0;
    score = 0;
    started = true;
    startButton.textContent = 'Restart quiz ↻';
    nextButton.disabled = true;
    progressEl.style.width = `${100 / quizQuestions.length}%`;
    renderQuestion();
  };

  const renderResults = () => {
    categoryEl.textContent = 'THAT WAS FUN';
    countEl.textContent = `${String(quizQuestions.length).padStart(2, '0')} / ${String(quizQuestions.length).padStart(2, '0')}`;
    questionEl.textContent = score === quizQuestions.length
      ? 'A perfect little run. Your curiosity is showing!'
      : 'Nice work showing up for your curious side.';
    optionsEl.replaceChildren();
    feedbackEl.textContent = `You got ${score} out of ${quizQuestions.length} right.`;
    feedbackEl.classList.remove('is-incorrect');
    scoreEl.textContent = `${subjectSelect.value} · ${difficultySelect.value}`;
    progressEl.style.width = '100%';
    nextButton.disabled = false;
    nextButton.textContent = 'Play again';
  };

  startButton.addEventListener('click', beginQuiz);
  subjectSelect.addEventListener('change', beginQuiz);
  difficultySelect.addEventListener('change', beginQuiz);

  nextButton.addEventListener('click', () => {
    if (!started) {
      return;
    }

    if (questionIndex >= quizQuestions.length) {
      beginQuiz();
      return;
    }

    if (!answered) {
      if (selectedAnswer === null) return;

      answered = true;
      const question = quizQuestions[questionIndex];
      const isCorrect = selectedAnswer === question.answer;
      if (isCorrect) score += 1;
      optionsEl.querySelectorAll('.quiz-option').forEach((option, index) => {
        option.disabled = true;
        if (index === question.answer) option.classList.add('is-correct');
        if (index === selectedAnswer && !isCorrect) option.classList.add('is-incorrect');
      });
      feedbackEl.textContent = `${isCorrect ? 'That’s right!' : 'Not quite.'} ${question.explanation}`;
      feedbackEl.classList.toggle('is-incorrect', !isCorrect);
      scoreEl.textContent = `${score} ${score === 1 ? 'little win' : 'little wins'} so far`;
      nextButton.innerHTML = questionIndex === quizQuestions.length - 1
        ? 'See your score <span aria-hidden="true">→</span>'
        : 'Next question <span aria-hidden="true">→</span>';
      return;
    }

    questionIndex += 1;
    if (questionIndex === quizQuestions.length) {
      renderResults();
      return;
    }
    renderQuestion();
  });

  questionEl.textContent = 'Choose a subject and difficulty, then start your quiz.';
  categoryEl.textContent = 'READY WHEN YOU ARE';
  scoreEl.textContent = 'Your first question is waiting';
  progressEl.style.width = '0%';
  nextButton.disabled = true;
}

const questionForm = document.querySelector('#question-form');

if (questionForm) {
  questionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const question = questionForm.querySelector('#student-question').value.trim();
    const category = questionForm.querySelector('#question-category').value;
    const message = questionForm.querySelector('#question-message');

    if (!question) return;

    message.textContent = `Your ${category} question is ready. This demo does not send or save questions yet.`;
    message.hidden = false;
  });
}

const practiceForm = document.querySelector('#practice-form');

if (practiceForm) {
  const subjectSelect = document.querySelector('#practice-subject');
  const difficultySelect = document.querySelector('#practice-difficulty');
  const promptEl = document.querySelector('#practice-prompt');
  const answerInput = document.querySelector('#practice-answer');
  const feedbackEl = document.querySelector('#practice-feedback');
  const explanationEl = document.querySelector('#practice-explanation');
  const levelNote = document.querySelector('#practice-level-note');
  const nextButton = document.querySelector('#practice-next');
  let questionIndex = 0;

  const practiceBank = {
    Math: {
      Easy: [
        { prompt: 'What is 8 + 7?', answer: '15', explanation: 'Add 8 and 7 to get 15.' },
        { prompt: 'What is 24 ÷ 6?', answer: '4', explanation: '6 × 4 = 24, so 24 ÷ 6 = 4.' },
        { prompt: 'What is 5 × 3?', answer: '15', explanation: 'Five groups of three make 15.' },
      ],
      Medium: [
        { prompt: 'Solve: 4x + 3 = 19. What is x?', answer: '4', explanation: 'Subtract 3 from both sides: 4x = 16. Divide by 4: x = 4.' },
        { prompt: 'What is 15% of 200?', answer: '30', explanation: '10% of 200 is 20 and 5% is 10. Together, 15% is 30.' },
        { prompt: 'Simplify the fraction 18/24.', answer: '3/4', explanation: 'Divide the top and bottom by 6: 18/24 = 3/4.' },
      ],
      Challenge: [
        { prompt: 'A rectangle has perimeter 30 cm and length 9 cm. What is its width in cm?', answer: '6', explanation: 'P = 2l + 2w. So 30 = 18 + 2w, giving w = 6 cm.' },
        { prompt: 'Solve: 3(x + 2) = 2x + 11. What is x?', answer: '5', explanation: 'Expand to 3x + 6 = 2x + 11. Subtract 2x and then 6: x = 5.' },
        { prompt: 'A £80 item is reduced by 15%. What is the sale price in pounds?', answer: '68', explanation: '15% of £80 is £12. Subtract the discount: £80 − £12 = £68.' },
      ],
    },
    English: {
      Easy: [
        { prompt: 'Choose the correct word: “___ cat is sleeping.” (Their / There / They’re)', answer: 'their', explanation: '“Their” shows that the cat belongs to them.' },
        { prompt: 'What is the past tense of “walk”?', answer: 'walked', explanation: 'For this regular verb, add -ed: walk becomes walked.' },
        { prompt: 'Which punctuation mark ends a question?', answer: '?', explanation: 'A question mark (?) goes at the end of a direct question.' },
      ],
      Medium: [
        { prompt: 'Choose the correct verb: “She ___ finished her homework.” (has / have)', answer: 'has', explanation: '“She” takes the singular helping verb “has.”' },
        { prompt: 'What is a synonym for “enormous”?', answer: 'huge', explanation: '“Huge” means very large, just like “enormous.”' },
        { prompt: 'Which word is the adverb: “He spoke softly to the class.”', answer: 'softly', explanation: '“Softly” describes how he spoke, so it is an adverb.' },
      ],
      Challenge: [
        { prompt: 'In “Although it rained, we played,” which word introduces the subordinate clause?', answer: 'although', explanation: '“Although” is a subordinating conjunction introducing “Although it rained.”' },
        { prompt: 'Which punctuation mark can join two closely related complete sentences?', answer: 'semicolon', explanation: 'A semicolon (;) can link two closely related independent clauses.' },
        { prompt: 'What is the passive form of “The chef cooked the meal”?', answer: 'the meal was cooked by the chef', explanation: 'Make the object the subject: “The meal was cooked by the chef.”' },
      ],
    },
  };

  const loadPracticeQuestion = () => {
    const questions = practiceBank[subjectSelect.value][difficultySelect.value];
    const question = questions[questionIndex % questions.length];
    promptEl.textContent = question.prompt;
    levelNote.textContent = difficultySelect.value === 'Easy'
      ? 'A gentle warm-up'
      : difficultySelect.value === 'Medium'
        ? 'One step at a time'
        : 'Ready for a stretch?';
    answerInput.value = '';
    answerInput.disabled = false;
    feedbackEl.textContent = '';
    feedbackEl.classList.remove('is-correct', 'is-incorrect');
    explanationEl.textContent = '';
    explanationEl.hidden = true;
  };

  subjectSelect.addEventListener('change', () => {
    questionIndex = 0;
    loadPracticeQuestion();
  });
  difficultySelect.addEventListener('change', () => {
    questionIndex = 0;
    loadPracticeQuestion();
  });

  practiceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const question = practiceBank[subjectSelect.value][difficultySelect.value][questionIndex % practiceBank[subjectSelect.value][difficultySelect.value].length];
    const normalize = (value) => value.trim().toLowerCase().replace(/\s+/g, ' ');
    const isCorrect = normalize(answerInput.value) === normalize(question.answer);
    feedbackEl.textContent = isCorrect ? 'That’s correct — nicely done!' : 'Not quite yet. Take a look at the steps below.';
    feedbackEl.classList.toggle('is-correct', isCorrect);
    feedbackEl.classList.toggle('is-incorrect', !isCorrect);
    explanationEl.textContent = question.explanation;
    explanationEl.hidden = false;
    answerInput.disabled = true;
  });

  nextButton.addEventListener('click', () => {
    const questions = practiceBank[subjectSelect.value][difficultySelect.value];
    questionIndex = (questionIndex + 1) % questions.length;
    loadPracticeQuestion();
    answerInput.focus();
  });

  loadPracticeQuestion();
}
