import { useContext, useEffect } from 'react';
import { BuildContext } from '../context/BuildContext';
import {
  getBuilds,
  createBuild
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
      const added = await createBuild(build);
      dispatch({ type: 'create', payload: added });
      toast.success(`Your build "${added.name}" has been added`);
    }
    catch (err) {
      toast.error(err.message);
      throw err;
    }
  };

  return { builds, add };
}
