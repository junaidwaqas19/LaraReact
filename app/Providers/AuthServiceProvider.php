<?php

namespace App\Providers;

use App\Models\RolePermission;
use Illuminate\Support\Facades\Gate;
use App\Policies\GenericPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // Define model to policy mappings here if needed
                  'App\Models\Model' => GenericPolicy::class,
    
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();

        Gate::define('manage-resource', function ($user, $sidebarList, $action) {
            return RolePermission::where('user_id', $user->id)
                ->where('sidebar_list', $sidebarList)
                ->where($action, true)
                ->exists();
        });
    }
}
