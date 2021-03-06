/*
 * Copyright 2014-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
<template>
    <div class="login-bg" :style="{backgroundImage: 'url(' + bgLogin +')'}">
        <div class="login">
            <div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#wbs-icon-WeBASE"></use>
                </svg>
                <p class="logo-content">WeBank Blockchain Application Software Extension</p>
                <!-- <i class="wbs-icon-WeBASE"></i> -->
                <!-- <h2 class="login-title">WeBASE</h2> -->
            </div>
            <div class="msg-wrapper">
                <div class="msg-error" v-show="msgError || timeout">
                    <i class="el-icon-remove"></i>
                    <span v-if="msgError">{{msgErrorContent || "登录失败"}}</span>
                    <span v-else-if="timeout">请求超时</span>
                </div>
            </div>
            <div class="login-content">
                <template>
                    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form">
                        <el-form-item label="账号" prop="user">
                            <el-input v-model="loginForm.user" placeholder="请输入账号">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model="loginForm.password" placeholder="请输入密码" type="password">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="验证码" prop="vercode">
                            <div style="width: 100%;">
                                <el-input style="width: 240px;" v-model="loginForm.vercode" placeholder="请输入验证码" @keyup.enter.native="submit('loginForm')">
                                </el-input>
                                <span class="codeUrlImg">
                                    <img style="width: 100%;height: 100%" :src="codeUrl" alt="" @click="changeCode()">
                                </span>
                            </div>
                        </el-form-item>
                    </el-form>
                </template>
            </div>
            <div>
                <el-button @click="submit('loginForm')" type="primary" class="login-submit" :loading="logining">登录</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { login, networkList, haveNode, getPictureCheckCode } from "@/util/api";
import url from "@/util/url"
import router from "@/router";
import bg from "@/../static/image/banner.png";
import logo from "@/../static/image/logo-2 copy@1.5x.jpg";
import { delCookie } from '@/util/util'
import errcode from "@/util/errcode";
const sha256 = require("js-sha256").sha256;
export default {
    name: "login",
    data: function () {
        return {
            bgLogin: bg,
            logoPng: logo,
            logining: false,
            msgError: false,
            msgErrorContent: "",
            timeout: false,
            codeUrl: url.codeUrl,
            loginForm: {
                user: "",
                password: "",
                vercode: "",
            },
            rules: {
                user: [{ required: true, message: "请输入账号", trigger: "blur" }],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" }
                ],
                vercode: [
                    { required: true, message: "请输入验证码", trigger: "blur" }
                ]
            },
            authToken: null,
            newUserRules: {
                user: [
                    { required: true, message: "请输入账号", trigger: "blur" },
                    {
                        min: 1,
                        max: 32,
                        message: "长度在 1 到 32 个字符",
                        trigger: "blur"
                    }
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    {
                        min: 5,
                        max: 5,
                        message: "登录密码错误",
                        trigger: "blur"
                    },
                    {
                        pattern: /admin/,
                        message: "请正确输入密码",
                        trigger: "blur"
                    }
                ]
            }
        };
    },
    mounted: function () {
        this.changeCode()
    },
    methods: {
        submit: function (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.logining = true;
                    this.userLogin();
                } else {
                    return false;
                }
            });
        },
        changeCode: function () {
            this.codeUrl = "";
            this.authToken = ""
            getPictureCheckCode().then(res => {
                if (res.data.code === 0) {
                    this.codeUrl = `data:image/png;base64,${res.data.data.base64Image}`
                    this.authToken = res.data.data.token
                } else {
                    this.codeUrl = "";
                    this.authToken = ""
                    this.$message({
                        message: errcode.errCode[res.data.code].cn,
                        type: "error",
                        duration: 2000
                    });
                }
            }).catch(err => {
                this.codeUrl = "";
                this.authToken = ""
                this.$message({
                    message: '系统错误！',
                    type: "error",
                    duration: 2000
                });
            })
        },
        userLogin: function (callback) {
            delCookie('JSESSIONID')
            delCookie('NODE_MGR_ACCOUNT_C')
            let reqData = {
                account: this.loginForm.user,
                accountPwd: sha256(this.loginForm.password)
            };
            let checkCode = this.loginForm.vercode
            login(reqData, checkCode, this.authToken)
                .then(res => {
                    if (res.data.code === 0) {
                        localStorage.setItem("groupName", "");
                        localStorage.setItem("groupId", "");
                        localStorage.setItem("folderList", "")
                        localStorage.setItem("user", res.data.data.account);
                        localStorage.setItem("root", res.data.data.roleName);
                        localStorage.setItem("token", res.data.data.token);
                        sessionStorage.setItem("accountStatus", res.data.data.accountStatus);
                        sessionStorage.setItem("reload", 1);
                        router.push("/main")
                    } else {
                        this.changeCode()
                        this.msgErrorContent = errcode.errCode[res.data.code].cn || ""
                        this.msgError = true;
                        this.loginForm.password = "";
                        this.logining = false;
                    }
                })
                .catch(err => {
                    this.changeCode()
                    this.timeout = true;
                    this.loginForm.password = "";
                    this.logining = false;
                });
        },
    }
};
</script>
<style>
.login-label.is-required:not(.is-no-asterisk) > .el-form-item__label:before {
    content: "" !important;
}
.login-bg {
    position: relative;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.login {
    position: absolute;
    width: 430px;
    /* height: 460px; */
    top: 50%;
    left: 70%;
    margin-top: -280px;
    margin-left: -201px;
    padding: 0 50px 40px 50px;
    background-color: #fff;
    border-radius: 16px;
    text-align: center;
    box-sizing: border-box;
}
.logo-content {
    position: absolute;
    width: 100%;
    top: 90px;
    left: 0;
    text-align: center;
    font-size: 12px;
    color: #979faa;
    letter-spacing: 0.02px;
}
.msg-wrapper {
    min-height: 20px;
    height: auto;
    /* margin: 5px 0; */
}
.msg-error {
    color: #e4393c;
}
.codeUrlImg {
    display: inline-block;
    height: 38px;
    width: 60px;
    line-height: 38px;
    padding-left: 16px;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    vertical-align: middle;
    cursor: pointer;
    /* background-color: #e4393c */
}
.logo {
    width: 120px;
    padding-top: 80px;
}
.login-title {
    padding: 16px 0 0px 0;
    font-size: 20px;
    color: #2e2e2e;
    letter-spacing: 0.04px;
}
.login-label {
    position: relative;
    padding: 0 60px;
}
.login-label input {
    height: 54px;
    padding-left: 60px;
}
/* .login-content .login-label .el-form-item__label {
    position: absolute !important;
    left: 52px !important;
    top: 12px !important;
    z-index: 999 !important;
    border-right: 1px solid #cfdae9 !important;
    height: 30px !important;
    line-height: 30px !important;
} */
.login-submit {
    width: 100%;
    height: 45px;
    margin-top: 10px;
    font-size: 14px;
}
.icon {
    width: 142px;
    height: 142px;
    /* vertical-align: -0.15em; */
    fill: currentColor;
    overflow: hidden;
}
.el-form-item.is-required:not(.is-no-asterisk) > .el-form-item__label:before {
    content: "";
}
.login-form .el-form-item__label {
    display: block;
    line-height: 32px;
    float: none;
    text-align: left;
}
</style>
