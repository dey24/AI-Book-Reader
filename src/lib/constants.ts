// Brand color - used in JS files where CSS variables aren't available
export const BRAND_COLOR = '#212a3b'; // Dark blue-gray
export const BRAND_COLOR_HOVER = '#3d485e'; // Medium blue-gray

// Sample books for the homepage (using Open Library covers)
export const sampleBooks = [
    {
        id: '1',
        title: 'Tripping on Utopia',
        author: 'Benjamin Breen',
        slug: 'tripping-on-utopia',
        coverURL: 'https://cdn.sanity.io/images/ps8jihhe/production/35259e6a780c90996aebe106dd622cfd34b036e7-994x1500.webp?w=1080&f=webp',
        coverColor: '#f8f4e9',
    },
    {
        id: '2',
        title: 'LaserWriter II',
        author: 'Tamara Shopsin',
        slug: 'laserwrite-ii',
        coverURL: 'https://cdn.sanity.io/images/ps8jihhe/production/662a3e4a13cb6eea1862a0560698ae63cbdc29e0-667x1000.jpg?w=1080&f=webp',
        coverColor: '#f8f4e9',
    },
    {
        id: '3',
        title: 'Nature and Value',
        author: 'Akeel Bilgrami',
        slug: 'nature-and-world',
        coverURL: 'https://cdn.sanity.io/images/ps8jihhe/production/f98ea737eee1ea28e19c0d588946b258b49c437a-1622x2449.jpg?w=1080&f=webp',
        coverColor: '#f8f4e9',
    },
    {
        id: '4',
        title: 'The Pale King',
        author: 'David Foster Wallace',
        slug: 'the-pale-king',
        coverURL: 'https://cdn.sanity.io/images/ps8jihhe/production/0d831aebd9f1422e482712943c91128b75bab132-800x1157.jpg?w=1080&f=webp',
        coverColor: '#f8f4e9',
    },
    {
        id: '5',
        title: 'Closing Time',
        author: 'Joe Queenan',
        slug: 'closing-time',
        coverURL: 'https://cdn.sanity.io/images/ps8jihhe/production/1b74e068047668e48bb156ee01f575607bf2ea87-345x500.jpg?w=1080&f=webp',
        coverColor: '#f8f4e9',
    },
    {
        id: '6',
        title: 'Three Delays',
        author: 'Charlie Smith',
        slug: 'three-delays',
        coverURL: 'https://cdn.sanity.io/images/ps8jihhe/production/1dc660dbdb5ff64b55592ec0ec1638fd289cc8af-332x500.jpg?w=1080&f=webp',
        coverColor: '#f8f4e9',
    },
    {
        id: '7',
        title: 'The Last Skin',
        author: 'Barbara Ras',
        slug: 'the-last-skin',
        coverURL: 'https://cdn.sanity.io/images/ps8jihhe/production/fde9f4b4a072acca2d46fb521f500d12a9f8b00c-333x500.jpg?w=1080&f=webp',
        coverColor: '#f8f4e9',
    },
    {
        id: '8',
        title: 'Adland',
        author: 'James P. Othmer',
        slug: 'adland',
        coverURL: 'https://cdn.sanity.io/images/ps8jihhe/production/06ecf467dec5c66fa5855c619e16436c7595381b-324x500.jpg?w=1080&f=webp',
        coverColor: '#f8f4e9',
    },
    {
        id: '9',
        title: 'Wall Street',
        author: 'Steve Faster',
        slug: 'wall-street',
        coverURL: 'https://cdn.sanity.io/images/ps8jihhe/production/61b3ba7e9979fb13818f819f35a1c9c75dccde2f-333x500.jpg?w=1080&f=webp',
        coverColor: '#f8f4e9',
    },
    {
        id: '10',
        title: 'Birds of America: Stories',
        author: 'Lorrie Moore',
        slug: 'birds-of-america',
        coverURL: 'https://cdn.sanity.io/images/ps8jihhe/production/b2466edab57d1f688dfc38eaa8c870181cc2173e-350x521.jpg?w=1080&f=webp',
        coverColor: '#f8f4e9',
    },
];

// File validation helpers
export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
export const ACCEPTED_PDF_TYPES = ['application/pdf'];
export const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

// Pre-configured VAPI assistant ID (hardcoded for this app)
export const ASSISTANT_ID = process.env.NEXT_PUBLIC_ASSISTANT_ID!;

// 11Labs Voice IDs - Optimized for conversational AI
// Voices selected for natural, engaging book conversations
export const voiceOptions = {
    // Male voices
    dave: { id: 'CYw3kZ02Hs0563khs1Fj', name: 'Dave', description: 'Young male, British-Essex, casual & conversational' },
    daniel: { id: 'onwK4e9ZLuTAKqWW03F9', name: 'Daniel', description: 'Middle-aged male, British, authoritative but warm' },
    chris: { id: 'iP95p4xoKVk53GoZ742B', name: 'Chris', description: 'Male, casual & easy-going' },
    // Female voices
    rachel: { id: '21m00Tcm4TlvDq8ikWAM', name: 'Rachel', description: 'Young female, American, calm & clear' },
    sarah: { id: 'EXAVITQu4vr4xnSDxMaL', name: 'Sarah', description: 'Young female, American, soft & approachable' },
};

// Voice categories for the selector UI
export const voiceCategories = {
    male: ['dave', 'daniel', 'chris'],
    female: ['rachel', 'sarah'],
};

// Default voice
export const DEFAULT_VOICE = 'rachel';

// ElevenLabs voice settings optimized for conversational AI
export const VOICE_SETTINGS = {
    stability: 0.45, // Lower for more emotional, dynamic delivery (0.30-0.50 is natural)
    similarityBoost: 0.75, // Enhances clarity without distortion
    style: 0, // Keep at 0 for conversational AI (higher = more latency, less stable)
    useSpeakerBoost: true, // Improves voice quality
    speed: 1.0, // Natural conversation speed
};

// VAPI configuration for natural conversation
// NOTE: These settings should be configured in the VAPI Dashboard for the assistant
// They are kept here for reference and documentation purposes
export const VAPI_DASHBOARD_CONFIG = {
    // Turn-taking settings
    startSpeakingPlan: {
        smartEndpointingEnabled: true,
        waitSeconds: 0.4,
    },
    stopSpeakingPlan: {
        numWords: 2,
        voiceSeconds: 0.2,
        backoffSeconds: 1.0,
    },
    // Timing settings
    silenceTimeoutSeconds: 30,
    responseDelaySeconds: 0.4,
    llmRequestDelaySeconds: 0.1,
    // Conversation features
    backgroundDenoisingEnabled: true,
    backchannelingEnabled: true,
    fillerInjectionEnabled: false,
};

// Clerk appearance overrides - Warm Literary Style
// Note: Tailwind requires static class names at build time, so we hardcode color values here
export const CLERK_AUTH_APPEARANCE_OVERRIDE = {
    rootBox: 'mx-auto',
    card: 'shadow-none border-none rounded-xl bg-transparent',
    headerTitle: '!text-2xl font-bold text-[#212a3b]',
    headerSubtitle: '!mt-3 !text-sm text-[#3d485e]',
    socialButtonsBlockButton:
        '!border border-[rgba(33,42,59,0.12)] hover:bg-[#212a3b]/10 transition-all h-12 text-lg !rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.08)]',
    socialButtonsBlockButtonText: 'font-medium !text-[#212a3b] !text-lg',
    formButtonPrimary:
        'bg-[#212a3b] hover:bg-[#3d485e] text-white font-medium !border-0 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.08)] normal-case !h-12 !text-lg !rounded-xl',
    formFieldInput:
        '!border !border-[rgba(33,42,59,0.12)] !rounded-xl focus:ring-[#212a3b] focus:border-[#212a3b] !h-12 !min-h-12 !text-lg !bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.06)]',
    formFieldLabel: 'text-[#212a3b] font-medium text-lg',
    footerActionLink: 'text-[#212a3b] hover:text-[#3d485e] text-base font-medium',
};