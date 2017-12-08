##perl
##2
##return the shortest sequence from the sequence sample
##2
##../img/perl_maxSeq2.png

my @seq = ("tcgtgccca", "tgtt", "cccga","ttcatcag", "ggcaag", "ctg", "ggtgtaccggtgatcac", "ccaccta", "cctgaattat" );
my @prem = (); my @sec = (); my @tri = ();
for $k(@seq){
  if (length($k)>0 && length($k)<5)
  {
    push(@prem,$k);
  }
  if (length($k)>6 && length($k)<10){
    push(@sec,$k);
  }
  if (length($k)>10){
    push(@tri,$k)
  }
}
print join(",",@prem),"\n";
print join(",",@sec),"\n";
print join(",",@tri),"\n";

$max=1;
$maxi="";
for ($i=0; $i<=$#seq;$i++){
  if (length(@seq[$i])>$max){
    $max=length(@seq[$i]);
    $maxi=@seq[$i];
  }
}
print "le plus grand est ",$maxi;
