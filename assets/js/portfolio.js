document.addEventListener("DOMContentLoaded", async function() {
    const projectId = getProjectIdFromUrl();

    try {
        const project = await getProjectData(projectId);
        if (project) {
            updateProjectDetails(project);
        } else {
            console.error('Project not found');
        }
    } catch (error) {
        console.error('Error fetching project data:', error);
    }

    function getProjectIdFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('slug') || '';
    }

    async function getProjectData(projectId) {
        const response = await fetch('projects.json');
        const data = await response.json();
        return data.projects.find(p => p.slug === projectId);
    }

    function updateProjectDetails(project) {
        document.getElementById('client-name').textContent = project.client;
        document.getElementById('services').textContent = project.services;
        document.getElementById('technologies').textContent = project.technologies.join(', ');
        document.getElementById('project-link').href = project.website;
        document.getElementById('project-link').textContent = 'Github Repo'; // or something more descriptive

        document.getElementById('project-image').src = project.image;
        document.getElementById('project-image').alt = project.client;

        document.getElementById('project-description').textContent = project.description;
        document.getElementById('project-overview').textContent = project.overview;
        document.getElementById('additional-info').textContent = project.additional_info;
    }
});
