from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    RecordingViewSet,
    EventViewSet,
    SubscriptionViewSet,
    CourseViewSet,
    GroupViewSet,
    ModuleViewSet,
    PaymentMethodViewSet,
    SubscriptionTypeViewSet,
    EnrollmentViewSet,
    LessonViewSet,
    CategoryViewSet,
)

router = DefaultRouter()
router.register("paymentmethod", PaymentMethodViewSet)
router.register("course", CourseViewSet)
router.register("lesson", LessonViewSet)
router.register("subscriptiontype", SubscriptionTypeViewSet)
router.register("enrollment", EnrollmentViewSet)
router.register("subscription", SubscriptionViewSet)
router.register("group", GroupViewSet)
router.register("category", CategoryViewSet)
router.register("module", ModuleViewSet)
router.register("recording", RecordingViewSet)
router.register("event", EventViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
