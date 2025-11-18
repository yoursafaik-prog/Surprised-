/* CSS Variables for Colors and Consistency */
:root {
    --bg-color: #fdfdfd; /* Off-white/cream */
    --accent-sage: #b2c2a1; /* Light sage */
    --accent-rose: #e8b4b8; /* Dusty rose */
    --accent-gold: #f4e4bc; /* Pale gold */
    --text-color: #333;
    --mono-font: 'Courier New', monospace;
    --sans-font: 'Inter', sans-serif;
}

/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--sans-font);
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2 {
    font-weight: 600;
}

.mono {
    font-family: var(--mono-font);
}

/* Hero Section */
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.hero-content {
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.hero-content h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.cta-primary {
    background-color: var(--accent-sage);
    color: var(--text-color);
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.cta-primary:hover {
    background-color: var(--accent-rose);
}

/* Timeline Section */
.timeline {
    padding: 4rem 2rem;
    background-color: var(--bg-color);
}

.timeline h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.timeline-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.parallax-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://source.unsplash.com/featured/?stars,space') no-repeat center/cover;
    z-index: -1;
    transform: translateY(0);
}

.timeline-entries {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.timeline-entry {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.timeline-entry img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 10px solid #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px; /* Polaroid-style */
}

.timeline-entry .content {
    flex: 1;
}

/* Decryption Section */
.decryption {
    padding: 4rem 2rem;
    background-color: var(--accent-gold);
    text-align: center;
}

.decryption input {
    padding: 0.5rem;
    margin: 1rem 0;
    border: 1px solid var(--text-color);
    border-radius: 5px;
}

.decryption button {
    background-color: var(--accent-rose);
    color: var(--text-color);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
}

.hidden-letter {
    margin-top: 2rem;
    opacity: 0;
    transition: opacity 1s;
}

.hidden-letter.show {
    opacity: 1;
}

/* Compliments Section */
.compliments {
    padding: 4rem 2rem;
    background-color: var(--bg-color);
    text-align: center;
}

.compliments button {
    background-color: var(--accent-sage);
    color: var(--text-color);
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 1rem;
}

.compliment-text {
    font-size: 1.2rem;
    opacity: 0;
    transition: opacity 0.5s;
}

.compliment-text.show {
    opacity: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 1.5rem;
    }
    .timeline-entry {
        flex-direction: column;
        text-align: center;
    }
    .timeline-entry img {
        width: 80px;
        height: 80px;
    }
}
