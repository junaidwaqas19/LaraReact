<?php

namespace App\Policies;

use App\Models\User;

class GenericPolicy
{
    public function manageResource(User $user, $sidebarList, $action)
    {
        return $user->rolePermissions()
            ->where('sidebar_list', $sidebarList)
            ->where($action, true)
            ->exists();
    }
}
