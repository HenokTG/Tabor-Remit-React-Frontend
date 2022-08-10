from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import AgentProfile


class UserAdminConfig(UserAdmin):
    model = AgentProfile
    search_fields = ('email', 'username', 'first_name',
                     'business_name', 'commission', 'phone')
    list_filter = ('username', 'email', 'first_name',
                   'last_name', 'business_name',
                   'phone', 'commission', 'is_active', 'is_staff')
    ordering = ('-date_joined',)
    list_display = ('username', 'email', 'commission', 'first_name', 'last_name',
                    'business_name', 'phone', 'image',)

    fieldsets = UserAdmin.fieldsets + (
        ('Business info', {'fields': ('commission',
         'business_name', 'phone', 'image',)}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Business info', {'fields': ('commission',
         'business_name', 'phone', 'image',)}),
    )


admin.site.register(AgentProfile, UserAdminConfig)
