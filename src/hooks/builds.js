import { useContext, useState, useEffect } from 'react';
import { BuildContext } from '../context/BuildContext';
import { useUser } from './user';
import {
  getBuilds, getBuild,
  createBuild, updateBuild,
  removeBuild,
} from '../services/builds';
import toast from 'react-hot-toast';

export function useBuilds() {
  const context = useContext(BuildContext);

  if (context === undefined) {
    throw new Error('useBuilds must be used within a BuildProvider');
  }

  const { builds, dispatch } = context;

  useEffect(() => {
    if (builds) return;

    const load = async () => {
      try {
        const payload = await getBuilds();
        dispatch({ type: 'reset', payload });
      }
      catch (err) {
        toast.error(err.message);
        throw err;
      }
    };

    load();
  }, []);

  const add = async (build) => {
    try {
      const payload = await createBuild(build);
      dispatch({ type: 'create', payload });
      toast.success(`Your build "${payload.name}" has been added`);
      return payload;
    }
    catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  return { builds, add };
}

export function useBuildCount() {
  const context = useContext(BuildContext);

  if (context === undefined) {
    throw new Error('useBuildCount must be used within a BuildProvider')
  }

  return context.builds?.length;
}

export function useBuild(id) {
  const context = useContext(BuildContext);

  if (context === undefined) {
    throw new Error('useBuild must be used within a BuildProvider')
  }

  const { builds, dispatch } = context;
  const [build, setBuild] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const build = await getBuild(id);
        setBuild(build);
      }
      catch (error) {
        toast.error(error.message);
        throw error;
      }
    };

    load();
  }, [id]);

  // const remove = async () => {
  //   if (!build) return;
    
  //   try {
  //     const payload = await removeBuild(build.id);
  //     setBuild(null);
  //     if (builds) dispatch({ type: 'delete', payload });
  //     toast.success(`Your build "${build.name}" has been deleted`);
  //     return payload;
  //   }
  //   catch (error) {
  //     toast.error(error.message)
  //     throw error
  //   }
  // };

  // const update = async (edits) => {
  //   if (!build) return;

  //   try {
  //     const updated = await updateBuild({
  //       ...build,
  //       ...edits
  //     });
  //     const payload = {
  //       ...updated,
  //       user: user.email
  //     };

  //     setBuild(payload);
  //     if (builds) dispatch({ type: 'update', payload });
  //     toast.success(`Updated build "${build.name}"`);
  //     return payload;
  //   }
  //   catch (error) {
  //     toast.error(error.message);
  //     throw error;
  //   }
  // };

  return { build };
}
