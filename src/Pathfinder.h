#ifndef PATHFINDER_H
#define PATHFINDER_H

#include <napi.h>
#include "DetourNavMesh.h"
#include "DetourNavMeshQuery.h"

static const int MAX_POLYS = 256;
static const int MAX_SMOOTH = 2048;

template<class T> inline T rcMin(T a, T b) { return a < b ? a : b; }

template<class T> inline T rcMax(T a, T b) { return a > b ? a : b; }

enum SamplePolyAreas
{
	SAMPLE_POLYAREA_GROUND,
	SAMPLE_POLYAREA_WATER,
	SAMPLE_POLYAREA_ROAD,
	SAMPLE_POLYAREA_DOOR,
	SAMPLE_POLYAREA_GRASS,
	SAMPLE_POLYAREA_JUMP,
};

enum SamplePolyFlags
{
	SAMPLE_POLYFLAGS_WALK		= 0x01,		// Ability to walk (ground, grass, road)
	SAMPLE_POLYFLAGS_SWIM		= 0x02,		// Ability to swim (water).
	SAMPLE_POLYFLAGS_DOOR		= 0x04,		// Ability to move through doors.
	SAMPLE_POLYFLAGS_JUMP		= 0x08,		// Ability to jump.
	SAMPLE_POLYFLAGS_DISABLED	= 0x10,		// Disabled polygon
	SAMPLE_POLYFLAGS_ALL		= 0xffff	// All abilities.
};

class Pathfinder : public Napi::ObjectWrap<Pathfinder>
{
  dtNavMesh* m_navMesh;
	dtNavMeshQuery* m_navQuery;

  dtQueryFilter m_filter;

  int m_nsmoothPath;
  int m_npolys;
  dtPolyRef m_startRef;
  dtPolyRef m_endRef;

  float m_polyPickExt[3];

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

  Napi::Value FindPath(const Napi::CallbackInfo& info);
  Napi::Value LoadBin(const Napi::CallbackInfo& info);
  Napi::Value FindRandomPoint(const Napi::CallbackInfo& info);
};

#endif
