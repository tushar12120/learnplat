// Use window properties to avoid redeclaration errors if script loads twice
window.SUPABASE_URL = window.SUPABASE_URL || 'https://lxonpeiqxfllfxxadlpj.supabase.co';
window.SUPABASE_KEY = window.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4b25wZWlxeGZsbGZ4eGFkbHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1NTQ1MDcsImV4cCI6MjA4NDEzMDUwN30.bzFMrB9IqWL0ajPnQ7lPMbMrHjXcU_3fzUHx1q1mIvI';

window.supabaseClient = window.supabaseClient || null;
window.currentUser = window.currentUser || null;

// For backward compatibility, create global references (only if not already defined)
if (typeof supabaseClient === 'undefined') var supabaseClient = window.supabaseClient;
if (typeof currentUser === 'undefined') var currentUser = window.currentUser;

// Robust Initialization Logic
function initSupabase() {
    if (typeof window.supabase !== 'undefined') {
        initializeClient();
    } else {
        console.warn("[Supabase] Script not loaded yet, waiting...");
        const checkInterval = setInterval(() => {
            if (typeof window.supabase !== 'undefined') {
                clearInterval(checkInterval);
                initializeClient();
            }
        }, 500);
    }
}

function initializeClient() {
    try {
        if (window.supabaseClient) return; // Already initialized

        window.supabaseClient = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_KEY, {
            auth: {
                persistSession: true,
                autoRefreshToken: true,
                detectSessionInUrl: true
            }
        });

        // Update global references
        supabaseClient = window.supabaseClient;

        console.log("[Supabase] Client Initialized Successfully!");

        // Check session immediately after init
        if (typeof checkSession === 'function') {
            checkSession();
        }

        // Clear error UI if present (specific to index_lite.html)
        const authDiv = document.getElementById('authActions');
        if (authDiv && authDiv.innerText.includes('Failed')) {
            authDiv.innerHTML = `<button onclick="document.getElementById('authModal').style.display='flex'" class="auth-btn">Login / Save Progress</button>`;
        }

    } catch (e) {
        console.error("[Supabase] Init Failed:", e);
    }
}

// Start Initialization
initSupabase();
