from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

def user_profile_path(instance, filename):
    return f'user_{instance.id}/{filename}'

# User Manager
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        
        return self.create_user(email, password, **extra_fields)

# Home page models
class Testimonial(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()

class Project(models.Model):
    name = models.CharField(max_length=255)
    creation_date = models.DateTimeField(auto_now_add=True)
    team_members = models.ManyToManyField(User, related_name='team_members')
    progress = models.FloatField()
    status = models.CharField(max_length=50)

class User(models.Model):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    projects = models.ManyToManyField('Project', related_name='users')
    profile = models.ImageField(upload_to=user_profile_path)
    role = models.CharField(max_length=120)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    
    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    def __str__(self):
        return self.email

class NetworkReview(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews_given')
    peer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews_received')
    engagement_level = models.IntegerField()
    rating = models.FloatField()

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

class ToDoList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task_name = models.CharField(max_length=255)
    link = models.URLField()

# Collaboration models
class Location(models.Model):
    name = models.CharField(max_length=255)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profession = models.CharField(max_length=255)
    profile_type = models.CharField(max_length=50)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    wage = models.DecimalField(max_digits=10, decimal_places=2)
    experience = models.IntegerField()

# Project models
class ProjectDetails(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    description = models.TextField()
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.IntegerField()
    expertise_required = models.CharField(max_length=255)
    project_type = models.CharField(max_length=50)
    tags = models.CharField(max_length=255)
    frameworks = models.CharField(max_length=255)
    languages = models.CharField(max_length=255)
    skills_required = models.CharField(max_length=255)

class ProgressBar(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    ui_design = models.FloatField()
    frontend = models.FloatField()
    backend = models.FloatField()
    research = models.FloatField()
    overall = models.FloatField()

class Discussion(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=255)
    time = models.DateTimeField(auto_now_add=True)
    comment = models.TextField()

class Comment(models.Model):
    discussion = models.ForeignKey(Discussion, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=255)
    time = models.DateTimeField(auto_now_add=True)
    comment = models.TextField()

class Task(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    deadline = models.DateTimeField()
    description = models.TextField()
    img = models.ImageField(upload_to='tasks/')

class TeamMember(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    is_pseudomember = models.BooleanField(default=False)

# Profile models
class Billing(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    current_bill = models.DecimalField(max_digits=10, decimal_places=2)
    due_date = models.DateField()
    current_plan = models.CharField(max_length=255)

class PaymentMethod(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    ends_in = models.CharField(max_length=4)
    expiry = models.DateField()
    is_default = models.BooleanField(default=False)

class BillingHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    transaction_id = models.CharField(max_length=255)
    date = models.DateField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=50)

class SecuritySettings(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    two_factor_auth = models.BooleanField(default=False)
    account_preferences = models.JSONField()

# New Assignment and Submission models
class Assignment(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    date_assigned = models.DateTimeField()
    last_date = models.DateTimeField()

class Submission(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    submission_date = models.DateTimeField()
    files = models.FileField(upload_to='submissions/')
