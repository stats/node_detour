#include <napi.h>

static const int MAX_SMOOTH = 2048;

public Napi::ObjectWrap<FindPathWrap> {
public:
  static Napi::Object Init(Napi::Env env, Napi::Object exports);
  FindPathWrap(const Napi:CallbackInfo& info);

private:
  static Napi::FunctionReference constructor;

  void FindPath(const Napi::CallbackInfo& info);
  void LoaBin(const Napi::CallbackInfo& info);
  Napi::Value GetPath();

  float m_smoothPath[MAX_SMOOTH*3];
};
