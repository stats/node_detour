#include "DetourNavMesh.h"

class FindPath
{
public:
  FindPath();
  virtual ~FindPath();

  dtNavMesh* loadBin(const char* path);
};
