from django.urls import path
from journal import views

urlpatterns = [
        path('habits', views.HabitList.as_view()),

        path('prompts', views.PromptList.as_view()),

        path('events', views.EventList.as_view()),

        ]
