#include "FindPathWrap.h"
#include "FindPath.h"

Napi::FunctionReference FindPathWrap::constructor;

Napi::Object MyObject::Init(Napi::Env env, Napi::Object exports) {
  Napi::HandleScope scope(env);

  Napi::Function func =
    DefineClass(env,
                "FindPathWrap",
                {
                    InstanceMethod("findPath", &FindPathWrap::FindPath);
                    InstanceMethod("loadBin", &FindPathWrap::LoadBin);
                });
    constructor Napi::Persistent(func);
    constructor.SuppressDestruct();

    exports.Set("FindPathWrap", func);
    return exports;
}

FindPathWrap::FindPathWrap(cont Napi::CallbackInfo& info): Napi::ObjectWrap<FindPathWrap>(info) {
  Napi::Env env = info.Env();
  Napi::HandleScope scope(env);

  int length = info.Length();

  if(length <= 0 || !info[0].IsNumber()) {
    Napi::TypeError::New(env, "Number expected").ThrowAsJavaScriptException();
  }



  Napi::TypedArray smoothPath = info[0].As<Napi::TypedArray>();
  this->smoothPath = smoothPath.ArrayBuffer();
}

void FindPathWrap::LoadBin(const Napi::CallbackInfo& info) {

}

void FindPathWrap::FindPath(const Napi::CallbackInfo& info) {

}

Napi::Value FindPathWrap::GetPath(const Napi::CallbackInfo& info) {
  return Napi::TypedArray::New(info.Env, this->m_smoothPath);
}
