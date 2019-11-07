#ifndef PATHFINDER_H
#define PATHFINDER_H

#include <napi.h>
#include "DetourNavMesh.h"

static const int MAX_POLYS = 256;
static const int MAX_SMOOTH = 2048;

template<class T> inline T rcMin(T a, T b) { return a < b ? a : b; }

template<class T> inline T rcMax(T a, T b) { return a > b ? a : b; }

class Pathfinder : public Napi::ObjectWrap<Pathfinder>
{
  dtNavMesh* m_navMesh;
	dtNavMeshQuery* m_navQuery;
  int m_nsmoothPath;
  int m_npolys;
  dtPolyRef m_startRef;
  dtPolyRef m_endRef;

  float m_polyPickExt[3];
  bool m_sposSet;
  bool m_eposSet;

  float m_smoothPath[MAX_SMOOTH*3];
  float m_spos[3];
  float m_epos[3];

  dtPolyRef m_polys[MAX_POLYS];
public:
  static Napi::Object Init(Napi::Env env, Napi::Object exports);
  Pathfinder(const Napi::CallbackInfo &info);

  // void loadBin(const char* path);
  // void findPath();
  // float getPath();

private:
  static Napi::FunctionReference constructor;

  void FindPath(const Napi::CallbackInfo& info);
  void LoadBin(const Napi::CallbackInfo& info);
  Napi::Value GetPath(const Napi::CallbackInfo& info);
};

#endif
