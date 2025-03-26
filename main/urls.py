from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from .views import *


urlpatterns = [
    path('', HomePage, name='home'),
    path('login', Login, name='login'),
    path('logout/', Logout, name='logout'),
    
    path('profile/<int:user_id>/', GetUserId, name='profile'),
    
    path('projects', Projects, name='projects'),
    path('project/<slug:projectID>/delete/', delete_project, name='delete_project'),
    path('project/<slug:projectID>', ProjectView, name='project'),
    path('create-project', CreateProject, name='create-project'),
    
    path('profile/<slug:userID>', Profile, name='profile'),
    path('colab', Colab, name='colab'),
    
    path('dash', Dash, name='dashboard'),
    
    path('project/<int:project_id>/add_comment/', add_comment_view, name='add_comment'),
    path('project/<int:project_id>/mark_as_completed/', mark_as_completed, name='mark_as_completed'),
    path('project/<int:project_id>/suspend/', suspend_project, name='suspend_project'),
    path('project/<int:project_id>/delete/', delete_project, name='delete_project'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)