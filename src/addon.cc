#include <napi.h>
#include "Pathfinder.h"

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  return Pathfinder::Init(env, exports);
}

NODE_API_MODULE(addon, InitAll)
