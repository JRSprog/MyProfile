document.addEventListener('DOMContentLoaded', function() {
  const viewDetailsButtons = document.querySelectorAll('.view-details');
  const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
  
  viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get project data from data attributes
      const title = this.getAttribute('data-title');
      const image = this.getAttribute('data-image');
      const description = this.getAttribute('data-description');
      const technologies = this.getAttribute('data-technologies');
      const features = this.getAttribute('data-features');
      const link = this.getAttribute('data-link');
      
      // Populate modal with project data
      document.getElementById('modalProjectTitle').textContent = title;
      document.getElementById('modalProjectImage').src = image;
      document.getElementById('modalProjectImage').alt = title;
      document.getElementById('modalProjectDescription').textContent = description;
      
      // Populate technologies
      const technologiesContainer = document.getElementById('modalProjectTechnologies');
      technologiesContainer.innerHTML = '';
      technologies.split(',').forEach(tech => {
        const badge = document.createElement('span');
        badge.classList.add('badge', 'bg-primary', 'me-1', 'mb-1');
        badge.textContent = tech;
        technologiesContainer.appendChild(badge);
      });
      
      // Populate features
      const featuresContainer = document.getElementById('modalProjectFeatures');
      featuresContainer.innerHTML = '';
      features.split(';').forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresContainer.appendChild(li);
      });
      
      // Set project link
      const projectLink = document.getElementById('modalProjectLink');
      if (link && link !== '#') {
        projectLink.href = link;
        projectLink.style.display = 'inline-block';
      } else {
        projectLink.style.display = 'none';
      }
      
      // Show the modal
      projectModal.show();
    });
  });
});
