function openCity(cityName) {
    // Hide all tab content
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Show the selected tab
    var selectedTab = document.getElementById(cityName);
    if (selectedTab) {
        selectedTab.style.display = "block";
    }
}

// Automatically load Home tab when page loads
window.onload = function() {
    openCity('Home');
};