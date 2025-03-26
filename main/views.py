from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.template import loader
from django.contrib import messages
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

from .models import *
from .models2 import *
from .forms import *


# Create your views here.
@csrf_exempt
def Login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        if "confirm_password" in request.POST:
            confirm_password = request.POST.get('confirm_password')
            
            if password != confirm_password:
                messages.error(request, 'Passwords do not match.')
            elif User.objects.filter(email=email).exists():
                messages.error(request, 'Email is already registered.')
            else:
                User.objects.create_user(email=email, password=password).save()
                messages.success(request, 'Account created successfully.')
                
                return redirect('/')
        else:
            user = authenticate(request, username=email, password=password)
            
            if user is not None:
                auth_login(request, user)
                
                return redirect('/')
            else:
                messages.error(request, 'Invalid email or password.')
    
    return render(request, "singn-in&sign-up/index.html", {})

def GetUserId(request, user_id):
    user = get_object_or_404(User, id=user_id)
    
    return render(request, 'profile.html', {'user': user})


@login_required
def CreateProject(request):
    if request.method == 'POST':
        form = ProjectForm(request.POST)
        
        if form.is_valid():
            project = form.save(commit=False)
            project.save()
            project.hosts.add(request.user)
            project.team.add(request.user)
            
            return redirect('/projects') 
    else:
        form = ProjectForm()
    
    return render(request, 'create-project/index.html', {'form': form})


def ProjectView(request, projectID):
    project = Project.objects.get(pk=projectID)
    members = project.team.all()
    pseudo_members = project.pseudo_team.all()
    discussions = project.discussions.all()
    submissions = []
    
    try:
        assignments = Assignment.objects.get(project=projectID)
    except:
        assignments = []
    
    for assignment in assignments:
        submissions.append(Submission.objects.get(assignment=assignment.id))
    
    if request.method == 'POST':
        pass
    
    
    # Example team members (Dummy data)
    example_members = [
        TeamMember(user=User(username='john_doe'), project=project),
        TeamMember(user=User(username='jane_smith'), project=project),
        TeamMember(user=User(username='alice_johnson'), project=project)
    ]
    
    # Example pseudo members (Dummy data)
    example_pseudo_members = [
        TeamMember(user=User(username='bob_brown'), project=project, is_pseudomember=True),
        TeamMember(user=User(username='charlie_black'), project=project, is_pseudomember=True),
        TeamMember(user=User(username='diana_white'), project=project, is_pseudomember=True)
    ]
    
    # Example tasks (Dummy data)
    example_tasks = [
        Task(
            project=project,
            name='Design Landing Page',
            deadline=datetime(2024, 8, 15, 12, 0),
            description='Create a responsive design for the landing page.',
            img='https://via.placeholder.com/100'
        ),
        Task(
            project=project,
            name='Develop API',
            deadline=datetime(2024, 9, 1, 17, 0),
            description='Develop RESTful API endpoints for the application.',
            img='https://via.placeholder.com/100'
        ),
        Task(
            project=project,
            name='Write Unit Tests',
            deadline=datetime(2024, 8, 20, 9, 0),
            description='Write unit tests for the new features.',
            img='https://via.placeholder.com/100'
        )
    ]
    
    # Example discussions (Dummy data)
    example_discussions = [
        Discussion(
            user=User(username='john_doe'),
            time=datetime(2024, 7, 20, 14, 30),
            comment='We need to finalize the project requirements.'
        ),
        Discussion(
            user=User(username='charlie_black'),
            time=datetime(2024, 7, 21, 9, 0),
            comment='The API development is on track.'
        )
    ]
    
    # Adding comments to discussions
    example_discussions[0].comments.add(Comment(
        user=User(username='jane_smith'),
        username='jane_smith',
        comment='I agree, let\'s set up a meeting.'
    ))
    example_discussions[0].comments.add(Comment(
        user=User(username='alice_johnson'),
        username='alice_johnson',
        comment='I can create a draft of the requirements.'
    ))
    example_discussions[1].comments.add(Comment(
        user=User(username='diana_white'),
        username='diana_white',
        comment='Great! I will start writing the tests.'
    ))
    
    # Extend the original lists with the example data
    members.extend(example_members)
    pseudo_members.extend(example_pseudo_members)
    assignments.extend(example_tasks)
    discussions.extend(example_discussions)
    
    return render(request, "project/index.html", { 
        'project' : project, 
        'members' : members, 
        'pseudo_members' : pseudo_members, 
        'discussions' : discussions, 
        "assignments" : assignments, 
        'submissions' : submissions, 
        "user_id" : request.user 
    })


def Projects(request):
    projects = Project.objects.all().values()
    example_projects = [
        {
            'name': 'Example Project 1',
            'description': 'This is an example project description 1.',
            'budget': 5000.00,
            'duration': 30,
            'expertise_required': 'Intermediate',
            'project_type': 'Web Development',
            'tags': 'Django, React',
            'frameworks': 'Django, React',
            'languages': 'Python, JavaScript',
            'skills_required': 'Web Development, Frontend, Backend'
        },
        {
            'name': 'Example Project 2',
            'description': 'This is an example project description 2.',
            'budget': 10000.00,
            'duration': 60,
            'expertise_required': 'Advanced',
            'project_type': 'Mobile Development',
            'tags': 'Flutter, Firebase',
            'frameworks': 'Flutter, Firebase',
            'languages': 'Dart, SQL',
            'skills_required': 'Mobile Development, Backend'
        },
        {
            'name': 'Example Project 3',
            'description': 'This is an example project description 3.',
            'budget': 7500.00,
            'duration': 45,
            'expertise_required': 'Beginner',
            'project_type': 'Data Science',
            'tags': 'Pandas, Scikit-learn',
            'frameworks': 'Pandas, Scikit-learn',
            'languages': 'Python, R',
            'skills_required': 'Data Analysis, Machine Learning'
        }
    ]
    projects.extend(example_projects)
    
    return render(request, "projects/index.html", { 'projects' : projects })

def Dash(request):
    projects = Project.objects.all().values()
    example_projects = [
        {
            'name': 'Example Project 1',
            'description': 'This is an example project description 1.',
            'budget': 5000.00,
            'duration': 30,
            'expertise_required': 'Intermediate',
            'project_type': 'Web Development',
            'tags': 'Django, React',
            'frameworks': 'Django, React',
            'languages': 'Python, JavaScript',
            'skills_required': 'Web Development, Frontend, Backend'
        },
        {
            'name': 'Example Project 2',
            'description': 'This is an example project description 2.',
            'budget': 10000.00,
            'duration': 60,
            'expertise_required': 'Advanced',
            'project_type': 'Mobile Development',
            'tags': 'Flutter, Firebase',
            'frameworks': 'Flutter, Firebase',
            'languages': 'Dart, SQL',
            'skills_required': 'Mobile Development, Backend'
        },
        {
            'name': 'Example Project 3',
            'description': 'This is an example project description 3.',
            'budget': 7500.00,
            'duration': 45,
            'expertise_required': 'Beginner',
            'project_type': 'Data Science',
            'tags': 'Pandas, Scikit-learn',
            'frameworks': 'Pandas, Scikit-learn',
            'languages': 'Python, R',
            'skills_required': 'Data Analysis, Machine Learning'
        }
    ]
    projects.extend(example_projects)
    
    reviews = NetworkReview.objects.all().values()
    notifications = Notification.objects.all().values()
    todo_list = ToDoList.objects.all().values()
    
    # Example Network Reviews
    example_reviews = [
        NetworkReview(
            user=User(username='john_doe'),
            peer=User(username='jane_smith'),
            engagement_level=8,
            rating=4.5
        ),
        NetworkReview(
            user=User(username='alice_johnson'),
            peer=User(username='charlie_black'),
            engagement_level=9,
            rating=4.8
        ),
        NetworkReview(
            user=User(username='bob_brown'),
            peer=User(username='diana_white'),
            engagement_level=7,
            rating=4.2
        )
    ]
    
    # Example Notifications
    example_notifications = [
        Notification(
            user=User(username='john_doe'),
            content='You have a new task assigned.',
            timestamp=datetime.now()
        ),
        Notification(
            user=User(username='jane_smith'),
            content='Project meeting scheduled for tomorrow.',
            timestamp=datetime.now()
        ),
        Notification(
            user=User(username='alice_johnson'),
            content='Your task deadline is approaching.',
            timestamp=datetime.now()
        )
    ]
    
    # Example To-Do List Items
    example_todo_list = [
        ToDoList(
            user=User(username='john_doe'),
            task_name='Complete project proposal',
            link='http://example.com/proposal'
        ),
        ToDoList(
            user=User(username='jane_smith'),
            task_name='Review codebase',
            link='http://example.com/codebase'
        ),
        ToDoList(
            user=User(username='alice_johnson'),
            task_name='Update project documentation',
            link='http://example.com/documentation'
        )
    ]
    reviews.extend(example_reviews)
    notifications.extend(example_notifications)
    todo_list.extend(example_todo_list)

    context = {
        'projects': projects,
        'reviews':reviews,
        'notifications': notifications,
        'todo_list': todo_list
    }
    return render(request, "dashboard/index.html", context)


def Profile(request, userID):
    return render(request, "profile/index.html", {})


def HomePage(request):
    testimonials = HomeTestimonial.objects.all()
    team_members = HomeTeamMember.objects.all()
    stats = HomeStatistic.objects.all()
    
    return render(request, 'home/index.html', { 'testimonials': testimonials, 'team_members': team_members, 'stats': stats })


def Colab(request):
    slider_images = {
        'img1.jpg': ['<h2>Slide 1</h2>', '<p>Content 1</p>'],
        'img2.jpg': ['<h2>Slide 2</h2>', '<p>Content 2</p>'],
        'img3.jpg': ['<h2>Slide 3</h2>', '<p>Content 3</p>'],
    }
    categories = [
        {'icon': 'fa-mail-bulk', 'name': 'Marketing', 'available': 123},
        {'icon': 'fa-headset', 'name': 'Customer Service', 'available': 123},
        {'icon': 'fa-user-tie', 'name': 'Human Resource', 'available': 123},
        {'icon': 'fa-tasks', 'name': 'Project Management', 'available': 123},
        {'icon': 'fa-chart-line', 'name': 'Business Development', 'available': 123},
        {'icon': 'fa-hands-helping', 'name': 'Sales & Communication', 'available': 123},
        {'icon': 'fa-book-reader', 'name': 'Web Development', 'available': 123},
        {'icon': 'fa-drafting-compass', 'name': 'Design & Creative', 'available': 123},
    ]
    profiles = ColabProfile.objects.all() 
    countryOptions = []
    
    return render(request, 'colab/index.html', { 'sliderImages': slider_images, 'profiles': profiles, 'countryOptions': countryOptions, 'categories': categories })


def Logout(request):
    auth_logout(request)
    
    return redirect('login')


@login_required
def add_comment_view(request, projectID):
    project = get_object_or_404(Project, id=projectID)
    
    if request.method == 'POST':
        comment_text = request.POST['comment']
        
        if comment_text:
            discussion = Discussion.objects.create(project=project, user=request.user, text=comment_text)
            project.discussions.add(discussion)
            project.save()
        
        return redirect('project/index.html', project_id=project.id)
    
    return render(request, 'project/index.html', {'project': project})


@login_required
def mark_as_completed(request, projectID):
    project = get_object_or_404(Project, id=projectID)
    if request.user in project.team.all():  
        project.status = 'Completed'
        project.save()
    return redirect('projects') 


@login_required
def suspend_project(request, projectID):
    project = get_object_or_404(Project, id=projectID)
    
    if request.user in project.team.all():  
        project.status = 'Suspended'
        project.save()
    
    return redirect('projects') 


@login_required
def delete_project(request, projectID):
    project = get_object_or_404(Project, id=projectID)
    project.delete()
    
    return redirect('projects')