##perl
##2
##return longest sequence from the sequence sample
##4
##../img/perl_maxSeq1.png

my @seq = ("tcgtgccca", "tgtt", "cccga","ttcatcag", "ggcaag", "ctg", "ggtgtaccggtgatcac", "ccaccta", "cctgaattat" );
my @prem = (); my @sec = (); my @tri = ();
for $k(@seq){
(length($k)>0 && length($k)<5)?push(@prem,$k):null;
(length($k)>6 && length($k)<10)?push(@sec,$k):null;
(length($k)>10)?push(@tri,$k):null;}
$max=1;$maxi="";
for ($i=0; $i<=$#seq;$i++){
if (length(@seq[$i])>$max){
$max=length(@seq[$i]);
$maxi=@seq[$i];}}
print "le plus grand est ",$maxi;
