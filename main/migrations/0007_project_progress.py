# Generated by Django 4.2.13 on 2024-07-23 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_user_role'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='progress',
            field=models.IntegerField(default=0),
        ),
    ]
