(async function () {
    // Kill switch
    window.__LI_STOP__ = false;
  
    const SENT_URL = "https://www.linkedin.com/mynetwork/invitation-manager/sent/";
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const visible = (el) => el && el.offsetParent !== null;
  
    let idleCount = 0;
    const MAX_IDLE = 6;
  
    // Find visible span by exact text
    const spanByText = (txt, root = document) =>
      Array.from(root.querySelectorAll("span"))
        .find(s => visible(s) && (s.textContent || "").trim() === txt) || null;
  
    // Click span or closest clickable parent
    const clickSpan = (sp) => {
      if (!sp) return false;
      const clickable =
        sp.closest("button,a,[role='button'],div[role='button']") || sp;
      clickable.click();
      return true;
    };
  
    const onSent = () =>
      location.pathname.includes("/invitation-manager/sent");
  
    const onReceived = () =>
      location.pathname.includes("/invitation-manager/received");
  
    console.log("LinkedIn withdraw snippet running. Stop with window.__LI_STOP__ = true");
  
    while (!window.__LI_STOP__) {
      let didSomething = false;
  
      /* 1️⃣ If LinkedIn auto-switches to RECEIVED → go back to SENT */
      if (onReceived() && !onSent()) {
        const sent = spanByText("Sent");
        if (sent) {
          clickSpan(sent);
          didSomething = true;
          await sleep(400);
        }
      }
  
      /* 2️⃣ Withdraw one invitation */
      const withdraw = spanByText("Withdraw");
      if (withdraw) {
        clickSpan(withdraw);
        await sleep(350);
  
        // Confirm in modal only
        const dialog = document.querySelector(".artdeco-modal,[role='dialog']");
        if (dialog) {
          const confirm = spanByText("Withdraw", dialog);
          if (confirm) clickSpan(confirm);
        }
  
        didSomething = true;
        await sleep(400);
      }
  
      /* 3️⃣ Load more if no withdraw visible */
      if (!didSomething) {
        const more = spanByText("Load more");
        if (more) {
          clickSpan(more);
          didSomething = true;
          await sleep(700);
        }
      }
  
      /* 4️⃣ If nothing found repeatedly → reload SENT page */
      if (!didSomething) {
        idleCount++;
        if (idleCount >= MAX_IDLE) {
          console.log("Nothing found. Reloading Sent page…");
          location.href = SENT_URL;   // after reload, run snippet again
          return;
        }
        await sleep(700);
      } else {
        idleCount = 0;
      }
    }
  
    console.log("Withdraw snippet stopped.");
  })();