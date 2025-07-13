// Tab logic (for future expansion)
const tabs = document.querySelectorAll('.tab-buttons button');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(btn => btn.classList.remove('active'));
    tab.classList.add('active');
    // You can expand this part to load content dynamically per tab
  });
});
