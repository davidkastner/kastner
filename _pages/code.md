---
permalink: /code/
title: "Code"
author_profile: true
redirect_from:
  - /md/
  - /code.html
---

<em>These are scripts that I have written as part of various projects. I include them here for any one to use. Feel free to reach out if you have any questions.
</em>

<h2><a href="https://github.com/davidkastner/nearest-neighbor" target="_blank">Nearest Neighbor DNA Annealing Calculation Script:
Enthalpy and Entropy Contributions</a></h2>
<a href="https://github.com/davidkastner/nearest-neighbor" target="_blank">
Summary. An in-house python script based on the work of SantaLucia et al. Improved Nearest-Neighbor Parameters for Predicting DNA Duplex Stability (1995). The script calculates a more accurate annealing temperature that accounts for entropic stacking effects of neighboring nucleotides, self-annealing, and initiation energy. The script can be run from the command line with the only input being the sequence of interest.<br/>
<img src='/images/strand.png' width='500' height='300'>
</a>

<h2><a href="https://github.com/davidkastner/fsl-slurm-scripts" target="_blank">Quantum Mechanic (QM) Supercomputing Cluster SLURM Script</a></h2>
<a href="https://github.com/davidkastner/fsl-slurm-scripts" target="_blank">
A SLURM script that has been rigorously optimized to run Gaussian on the Fulton Supercomputing Cluster. If you are outside of Brigham Young University and want to adapt it to a different cluster, you may need to make minor system specific adjustments. The input.sh script contains information on the QM job and the submit.sh script is an optimization protocol.<br/>
<img src='/images/bax.png' width='500' height='500'>
</a>

<h2><a href="https://github.com/davidkastner/nmr-scripts" target="_blank">Convert Between Raw Nuclear Magnetic Microscopy Data to CCPNMR Data</a></h2>
<a href="https://github.com/davidkastner/nmr-scripts" target="_blank">
An in-house Python script that takes in a raw proton list, peak list, and a protein sequence and converts it to a file type readable by CCPNMR which can then be manipulated and assigned.<br/>
<img src='/images/nmr_peaks.png' width='500' height='300'>
</a>
