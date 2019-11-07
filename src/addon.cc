#include <napi.h>
#include "FindPath.h"

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  return FindPath::Init(env, exports);
}

NODE_API_MODULE(addon, InitAll)
