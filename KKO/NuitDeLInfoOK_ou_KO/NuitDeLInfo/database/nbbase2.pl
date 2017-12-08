##perl
##3
##Calculation of bases
##3
##../img/perl_nbbase2.png


my $nucl = "ATCGCATCCTACGACGATCGTTGACTGCTGCATCGA";
my @res = split("",$nucl);
my $a=0;my $c=0;my $t;my $g=0;
for $j(@res){
  if ($j eq "A"){$a++}
  if ($j eq "C"){$c++}
  if ($j eq "T"){$t++}
  if ($j eq "G"){$g++}
}

print "le nombre de A est egale à ",$a,"\n";
print "le nombre de C est egale à ",$c,"\n";
print "le nombre de T est egale à ",$t,"\n";
print "le nombre de G est egale à ",$g,"\n";
