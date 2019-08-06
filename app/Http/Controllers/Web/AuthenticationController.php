<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Socialite;
use App\Models\User;
use Auth;
class AuthenticationController extends Controller
{

    public function getSocialRedirect($account)
    {
        try {
            return Socialite::with($account)->redirect();
        } catch (\InvalidArgumentException $e) {
            return redirect('/login');
        }
    }

    public function getSocialCallback($account)
    {
        # 从第三方OAuth回调中获取用户信息
        $sociaUser = Socialite::with($account)->user();
        //在本地users表中查询该用户来判断是否已存在
        $user = User::where('provider_id', '=', $sociaUser->id)
                ->where('provider', '=', $account)
                ->first();

        if($user == null){
            //如果用户不存在，将其保存到users表中
            $newUser = new User();

            $newUser->name = $sociaUser->getName() ? : $sociaUser->getNickname();
            $newUser->email = $sociaUser->getEmail();
            $newUser->avatar = $sociaUser->getAvatar();
            $newUser->password = '';
            $newUser->provider = $account;
            $newUser->provider_id = $sociaUser->getId();
            
            $newUser->save();
            $user = $newUser;
        }

        //手动登录该用户
        Auth::login($user);

        //登录成功后重定向到首页
        return redirect('/#/home');
    }
    
}
