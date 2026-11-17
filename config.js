/* Hier die Zugangsdaten deines Supabase-Projekts eintragen (Project Settings -> API). Der "anon public"-Schlüssel ist öffentlich gedacht, die Daten schützt die Anmeldung. */
window.DND_SB={
  url:"https://yqmlvwhpczlkcbkuyakk.supabase.co",   // z. B. "https://abcdxyz.supabase.co"
  key:"sb_publishable_NolxeKD03HzHPnL5Me7YLg_34mCB_yq",   // der lange "anon public" (bzw. "publishable") Schlüssel
  emailDomain:"dnd-forge.example.com",  // aus dem Benutzernamen (Vorname des Charakters) wird intern vorname@dnd-forge.example.com
  requireLogin:true,                    // true = ohne Anmeldung ist nichts zu sehen
  allowSignup:true                      // false = Knopf „Konto anlegen“ ausblenden (nach dem Anlegen der Konten)
};
